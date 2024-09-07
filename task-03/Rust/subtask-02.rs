use std::fs;
use std::io;

fn main() -> io::Result<()> {
    let file_contents= fs::read_to_string("input.txt")?;
    fs::write("output.txt", file_contents)?;
    
    Ok(())
}

