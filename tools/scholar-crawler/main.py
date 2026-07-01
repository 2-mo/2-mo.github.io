"""Fetch the author's Google Scholar profile and write citation data as JSON.

Outputs (under ./results):
  - gs_data.json           full author profile (citedby, hindex, publications)
  - gs_data_shieldsio.json shields.io badge endpoint for total citations

Requires the GOOGLE_SCHOLAR_ID environment variable (the value after
`user=` in a Google Scholar profile URL).
"""

import json
import os
from datetime import datetime

from scholarly import scholarly

scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]

author = scholarly.search_author_id(scholar_id)
scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])

# Key publications by their stable Scholar id so the site can match them.
author["publications"] = {p["author_pub_id"]: p for p in author["publications"]}
author["updated"] = str(datetime.now())

os.makedirs("results", exist_ok=True)

with open("results/gs_data.json", "w") as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldsio_data = {
    "schemaVersion": 1,
    "label": "citations",
    "message": str(author["citedby"]),
}
with open("results/gs_data_shieldsio.json", "w") as outfile:
    json.dump(shieldsio_data, outfile, ensure_ascii=False)

print(f"Wrote citation data for {author.get('name')}: "
      f"{author.get('citedby')} citations, h-index {author.get('hindex')}")
