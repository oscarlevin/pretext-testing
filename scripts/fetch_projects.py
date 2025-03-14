# This script will download the pretext repository, extract it, and copy select folders from examples/ to the projects directory.

from pathlib import Path
import shutil
import tempfile
import zipfile

import requests

from fetch_core_commit import commit_data


def main():
    last_core_commit = commit_data("pretext")["sha"]
    core_zip_path = Path("pretext").resolve() / "resources" / "core.zip"
    r = requests.get(f"https://github.com/pretextbook/pretext/archive/{last_core_commit}.zip")

    with open(core_zip_path, "wb") as f:
        f.write(r.content)

    with tempfile.TemporaryDirectory(prefix="ptxcli_") as tmpdirname:
        with zipfile.ZipFile(core_zip_path) as archive:
            archive.extractall(tmpdirname)

            shutil.copytree(
                Path(tmpdirname) / f"pretext-{last_core_commit}" / "examples" / "sample-book",
                Path("projects").resolve(),
                dirs_exist_ok=True,
            )
            shutil.copytree(
                Path(tmpdirname) / f"pretext-{last_core_commit}" / "examples" / "sample-article",
                Path("projects").resolve(),
                dirs_exist_ok=True,
            )

    print("Successfully updated core PreTeXtBook/pretext resources from GitHub.")





if __name__ == "__main__":
    main()