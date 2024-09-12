import System.IO


generateDiamond :: Int -> String
generateDiamond n = unlines $ top ++ bottom
  where
    top = [replicate ((n - i) `div` 2) ' ' ++ replicate i '*' | i <- [1,3..n]]
    bottom = [replicate ((n - i) `div` 2) ' ' ++ replicate i '*' | i <- [n-2,n-4..1]]

main :: IO ()
main = do
    
    inputHandle <- openFile "input.txt" ReadMode
    input <- hGetLine inputHandle
    hClose inputHandle


    let n = read input :: Int

    let oddN = if n `mod` 2 == 0 then n + 1 else n


    let pattern = generateDiamond oddN


    outputHandle <- openFile "outputstar.txt" WriteMode
    hPutStr outputHandle pattern
    hClose outputHandle


