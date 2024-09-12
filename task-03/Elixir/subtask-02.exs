defmodule FileCopy do
  def main do
    {:ok, contents} = File.read("input.txt")

    lines = String.split(contents, "\n")

    result = Enum.join(lines, "\n")

    File.write!("output.txt", result)
  end
end

FileCopy.main
