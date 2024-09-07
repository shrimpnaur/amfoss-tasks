import Control.Monad (replicateM_)

generateDiamond :: Int -> String
generateDiamond n = unlines $ top ++ bottom
  where
    top = [ replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- [0..n-1] ]
    bottom = [ replicate (n - i - 1) ' ' ++ replicate (2 * i + 1) '*' | i <- reverse [0..n-2] ]

main :: IO ()
main = do
    -- Read the number n from the console input
    putStrLn "Enter a number:"
    input <- getLine
    let n = read input :: Int
    -- Generate and print the diamond pattern
    putStrLn (generateDiamond n)
