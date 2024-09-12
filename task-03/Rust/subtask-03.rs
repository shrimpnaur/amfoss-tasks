use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a number: ");
    io::stdin().read_line(&mut input).unwrap();

    let n: u32 = input.trim().parse().unwrap();
    let n = if n % 2 == 0 { n + 1 } else { n };
    let mid = (n + 1) / 2;

    for i in 1..=mid {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        println!("{}{}", spaces, stars);
    }

    for i in (1..mid).rev() {
        let spaces = " ".repeat((mid - i) as usize);
        let stars = "*".repeat((2 * i - 1) as usize);
        println!("{}{}", spaces, stars);
    }
}
