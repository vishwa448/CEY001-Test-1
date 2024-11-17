<?php
/*	
Title : File Manipulation public Functions
Developer : Kaviska Dilshn
Description : Contains public functions for searching, reading, writing, and removing files.
Developed Date : 2024-01-17
Last Updated : 2024-01-17
*/

class FileManger
{
    /**
     * Searches for files in a directory based on filename and type.
     *
     * @param string $directory - the directory path.
     * @param string|null $fileName - the filename to search for (default: null).
     * @param string|null $type - the file type to filter (default: null).
     * @return array - array of file names or other data.
     */
    public function searchDirectory(string $directory, ?string $fileName = null, ?string $type = null): array
    {


        $files = scandir($directory);
        $result = [];
        if (!is_dir($directory)) {
            return $result;
        }


        foreach ($files as $file) {
            if ($file == '.' || $file == '..') {
                continue;
            }

            $filePath = $directory . '/' . $file;
            if ($file === $fileName . '.' . $type) {
                $result[] = $file;
            }
        }

        return $result;
    }

    /**
     * Removes a file from a directory.
     *
     * @param string $name - the name of the file to be removed(add file with path).
     * @return bool - true if the file is removed successfully, false otherwise.
     */
    public function removeFile($name): bool

    {
        if (file_exists($name)) {
            unlink($name);
            return true;
        }

        return false;
    }

    /**
     * Reads the content of a file.
     *
     * @param string $fileName - the name of the file to read.
     * @return mixed|null - the content of the file, or null if the file is not found.
     */
    public function readFileContent($fileName)
    {
        $file = fopen($fileName, "r");

        if ($file) {
            // Read the contents of the file
            $fileContents = fread($file, filesize($fileName));
            fclose($file);
            return $fileContents;
        }


        return null;
    }

    /**
     * Writes content to a file, either replacing or appending.
     *
     * @param string $fileName - the name of the file to write.
     * @param mixed $content - the content to write to the file.
     * @param bool|string $replace - true to replace the file content, false to append (default: false).
     */

    /** */
    public function writeFile($filePath, $fileName, $file, $replace = false, $returnName = true)
    {
        // Get the file extension from the uploaded file
        $fileExtension = '.' . pathinfo($file['name'], PATHINFO_EXTENSION);

        // Append the file extension to the file name
        $filePath = $filePath . $fileName . $fileExtension;

        if (!$replace && file_exists($filePath)) {
            return false;
        } else {
            if (!move_uploaded_file($file["tmp_name"], $filePath)) {
                return false;
            }

            return $returnName ? $fileName . $fileExtension : $filePath;
        }
    }

    /**
     * @param string $fileName fiel path
     */
    function getFileExtension($fileName)
    {
        return '.' . pathinfo($fileName, PATHINFO_EXTENSION);
    }



    /**
     * Checks if a file has a valid type.
     *
     * @param string $file - the path to the file.
     * @param string $type - the file type to validate.
     * @return bool - true if the file has a valid type, false otherwise.
     */
    private function isValidFileType($file, $type)
    {
        $allowedTypes = ['jpg', 'jpeg', 'png', 'svg', 'txt', 'json'];
        $fileExtension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

        return in_array($fileExtension, $allowedTypes) && $fileExtension === $type;
    }
}

// Example usage:
//$fileManager = new fileManger();
//$fileManager->searchDirectory('.', 'example.txt', 'txt');
//$fileManager->removeFile('example.txt');
//$fileManager->readFileContent('example.txt');
//$fileManager->writeFile('example.txt', 'New content', true);
