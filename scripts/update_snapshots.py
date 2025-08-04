# This script will download the pretext repository, extract it, and copy select folders from examples/ to the projects directory.

from pathlib import Path
import shutil


def main():
    """
    Copies the contents of the test-output folder to the snapshots folder.
    This is used to save snapshots of the test outputs for later comparison.
    """
    src_dir = Path("test-output")
    dst_dir = Path("snapshots")

    if not src_dir.exists():
        print(f"Source directory {src_dir} does not exist.")
        return

    if dst_dir.exists():
        shutil.rmtree(dst_dir)
    shutil.copytree(src_dir, dst_dir)
    print(f"Copied contents of {src_dir} to {dst_dir}.")

    print("All done.")





if __name__ == "__main__":
    main()
