use std::fs;
use std::io::{self, BufRead};

fn main() -> io::Result<()> {
    // Open the input file
    let file = fs::File::open("input.txt")?;
    let reader = io::BufReader::new(file);


    let mut number = None;
    if let Some(Ok(line)) = reader.lines().next() {
        if let Ok(n) = line.trim().parse::<u32>() {
            number = Some(if n % 2 == 0 { n + 1 } else { n });
        }
    }


    let n = number.unwrap_or(1);
    let mid = (n + 1) / 2;
    let mut output = String::new();


    for i in 1..=mid {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        output.push_str(&format!("{}{}\n", spaces, stars));
    }


    for i in (1..mid).rev() {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        output.push_str(&format!("{}{}\n", spaces, stars));
    }


    fs::write("output.txt", output)?;

    Ok(())
}

