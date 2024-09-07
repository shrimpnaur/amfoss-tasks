import System.IO

generateDiamond :: Int -> String
generateDiamond n = unlines $ top ++ bottom
  where
    top = [ replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- [0..n-1] ]
    bottom = [ replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- reverse [0..n-2] ]

main :: IO ()
main = do
    input <- readFile "input.txt"
    let n = read (head (lines input)) :: Int
    writeFile "output.txt" (generateDiamond n)
