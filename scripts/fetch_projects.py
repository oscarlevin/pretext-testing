# This script will download the pretext repository, extract it, and copy select folders from examples/ to the projects directory.

from pathlib import Path
import shutil
import tempfile
import zipfile

import requests

from fetch_core_commit import commit_data


def main():
    last_core_commit = commit_data("pretext")["sha"]

    with tempfile.TemporaryDirectory(prefix="ptxcli_") as tmpdirname:
        core_zip_path = Path(tmpdirname) / "pretext.zip"
        r = requests.get(f"https://github.com/pretextbook/pretext/archive/{last_core_commit}.zip")
        print("Downloading core PreTeXtBook/pretext resources from GitHub...")
        with open(core_zip_path, "wb") as f:
            f.write(r.content)
        with zipfile.ZipFile(core_zip_path) as archive:
            archive.extractall(tmpdirname)
            print("Extracted core PreTeXtBook/pretext resources from GitHub.")

            shutil.copytree(
                Path(tmpdirname) / f"pretext-{last_core_commit}" / "examples" / "sample-book",
                Path("projects").resolve() / "sample-book",
                dirs_exist_ok=True,
            )
            print("Copied sample-book to projects directory.")
            shutil.copytree(
                Path(tmpdirname) / f"pretext-{last_core_commit}" / "examples" / "sample-article",
                Path("projects").resolve() / "sample-article",
                dirs_exist_ok=True,
            )
            print("Copied sample-article to projects directory.")

    print("All done.")





if __name__ == "__main__":
    main()