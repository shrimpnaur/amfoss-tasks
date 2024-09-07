// Java program to read content from one file
// and write it into another file

// Custom paths for this program
// Reading from - gfgInput.txt
// Writing to - gfgOutput.txt

// Importing FileWriter class
// to write into a file
import java.io.FileWriter;
// Also importing IOException class to
// throw exception if occurs
import java.io.IOException;

// Class
class GFG {

	// Main driver method
	public static void main(String[] args)
	{
		// The file writing and creating process may give
		// some IOException, that's why it is mandatory to
		// use try block

		// Try block to check for exception/s
		try {

			// Creating a FileWriter object which will
			// create a new file and if already available
			// it will open it
			FileWriter fw = new FileWriter("gfg.txt");

			// Content to be written on file
			// Custom input string

			// write() method will write the string
			// in the file
			fw.write("We love GeeksForGeeks");

			// Closing the file freeing up resources
			// in the memory
			fw.close();

			// Print and display message
			System.out.println("\nFile write done");
		}

		// Catch block to catch if exception/s occurs
		catch (IOException e) {

			// Print and display message
			System.out.println(
				"There are some IOException");
		}
	}
}

