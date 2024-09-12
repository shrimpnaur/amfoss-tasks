package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {

	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println("Error opening input file:", err)
		return
	}
	defer file.Close()


	scanner := bufio.NewScanner(file)
	scanner.Scan()
	line := scanner.Text()
	n, err := strconv.Atoi(strings.TrimSpace(line))
	if err != nil {
		fmt.Println("Error converting number:", err)
		return
	}


	if n%2 == 0 {
		n++
	}

	var pattern strings.Builder


	for i := 1; i <= n; i += 2 {
		pattern.WriteString(strings.Repeat(" ", (n-i)/2))
		pattern.WriteString(strings.Repeat("*", i))
		pattern.WriteString("\n")
	}


	for i := n - 2; i > 0; i -= 2 {
		pattern.WriteString(strings.Repeat(" ", (n-i)/2))
		pattern.WriteString(strings.Repeat("*", i))
		pattern.WriteString("\n")
	}


	outputFile, err := os.Create("outputstar.txt")
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}
	defer outputFile.Close()

	_, err = outputFile.WriteString(pattern.String())
	if err != nil {
		fmt.Println("Error writing to output file:", err)
		return
	}
}

