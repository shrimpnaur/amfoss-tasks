 
printDiamond :: Int -> IO ()
printDiamond n = do

    mapM_ putStrLn [replicate ((n - i) `div` 2) ' ' ++ replicate i '*' | i <- [1,3..n]]

    mapM_ putStrLn [replicate ((n - i) `div` 2) ' ' ++ replicate i '*' | i <- [n-2,n-4..1]]

main :: IO ()
main = do

    putStrLn "Enter a number: "
    input <- getLine
    let n = read input :: Int
    let oddN = if n `mod` 2 == 0 then n + 1 else n

    printDiamond oddN

