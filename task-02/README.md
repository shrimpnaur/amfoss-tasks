## Terminal Chaos

## PART-1
I cloned this repo to my system using the command ```git clone``` and then by using ```ls``` and ```cd``` i entered the eolian caves. Used ```ls -a``` command to find the parchment.txt. The `tree` command helped me a lot throughout to find the files thoroughly. Opened the file with ```nano``` and copied the parchment code in my Handbook.

## PART-2
This part was a little tricky but I could get it after a few tries to understand about branches and how to explore them. I used ```git checkout <branch name>``` to checkout from the main branch to the Light Realm and used the tree command to look throught a lot of files with the names of flora and fauna. Then i used grep -wirl 'good' and grep -wirl 'holy' to find the common files and found *Moonbloom and Mistveil* and made myself the holy spell. Entered the khanrock file with the use of tree and then the Python file and got victory. Entered the holy spell and received the light realm code.

## PART-3
Used ```git checkout``` command to switch to both dark realms and used tree to locate the chest.py files in both the realms and ran the code from chest.py and then usedthe Celestial Veil Amulet code to unlock the chests. 
Got both the codes for Dark Book Part 1 and Part 2 after exploring more and unlocking the chests

## PART-4
This was the decoding part of all the 4 codes found from the previous parts and I did this by using the ```base64 -d``` command and got a repo link which I have stored it in the handbook. https://github.com/amansxcalibur/Terminal-Chaos-GodSuite

## PART-5
I cloned this repo and went through all the commits to find another repo link which lead me to the victory message. https://github.com/angrezichatterbox/To-the-stars-and-realms-unseen

## PART-6
Cloned this repo too and took screenshot of the victory.py file.
![image](https://github.com/user-attachments/assets/c2c66406-9454-46c5-b7c8-cc9847192bc4)



# Terminal commands I Used :-

*cd <directory_path: change the current working directory to a directory mentioned

*ls: lists all the files and directories in the current directory

*mkdir: this command can be used to create new directories on the file system. 

*nano <file_name>: opens the default text editor for editing or creating a file

*cat <file_name>: shows the content in the file

*grep: searches for particular texts in files.

*tree: shows the entire structure of the directory.

*clear: clear terminal session.

*echo -n <Base64EncodedStringHere> | base64 -d: decodes the Base64 code


## Git commands I Used:-

*git clone <url>: creates a copy of an existing Git repository

*git add . : adds all the files to commit

*git commit -m "message": commits the change with a message to be added to display in the commit log

*git push: pushes all the contents in the local branch to remote branch ie move a local branch to another repository

*git branch: lists all the branches present in the directory

*git checkout <branch name>: switches from one branch to another branch

*git status : displays the state of the working directory and the staged snapshot
