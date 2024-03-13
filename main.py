import os

def list_files_in_folder(folder_path):
    """
    Function to list all files in a folder.

    Args:
    - folder_path: Path to the folder

    Returns:
    - files: List of file names
    """
    files = []
    for file_name in os.listdir(folder_path):
        # Check if the path is a file
        if os.path.isfile(os.path.join(folder_path, file_name)):
            files.append(f'"{file_name}"')  # Add quotation marks around file name
    return files

if __name__ == "__main__":
    folder_path = input("Enter the folder path: ")
    files = list_files_in_folder(folder_path)
    if files:
        output_file_path = "file_names.txt"
        with open(output_file_path, "w") as output_file:
            for file_name in files:
                output_file.write(file_name + "\n")
        print(f"File names written to {output_file_path}")
    else:
        print("No files found in the folder.")
