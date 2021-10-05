# D3-more-practice
This repository is your starting point for ic-04. Assignment details and instructions are below. 

Link to your GitHub pages website: `[insert your *clickable* hyperlink here]`

# Aim of the assignment

The purpose of this assignment is to practice coding with D3. 


# Background
Please look through **all** the materials below before starting. This will ensure you understand the setup instructions; how to run, organize, and submit your code; and where to look for additional resources.

## Setup

You should do all your edits locally after cloning this repository. Commit major versions to your git repository.

1. Clone this repository to your local machine.
   - In your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

1. In order to read data from csv files, you will need to use a python simple server. To do that follow these steps:
   - `CD` or open a terminal / command prompt window into the folder you cloned above.
   - Start a python simple server from that folder with one of these commands (depending on how you set python up on your machine): `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. 
   - If you are using python 2 you will need to use `python -m SimpleHTTPServer` instead, but please switch to python 3 as [Python 2 was sunset on 2020-01-01](https://www.python.org/doc/sunset-python-2/).
   - After running the command, wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`.
   - Open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000. This is where you will see your code rendered. 

## Update hyperlinks

1. Edit near the top of this `README.md` file to include a clickable hyperlink to the GitHub pages website for your repo. Replace `` `[insert your *clickable* hyperlink here]` `` with your clickable URL. 

1. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id='forkongithub'`.

## Organization

Here is an overview of the files and folders provided in your repo.

### Root Files
* `README.md` is this explanatory file.

* `index.html` contains the main website content.

* `style.css` contains the CSS.

* `LICENCE` is the source code license for the template. You can add your name or leave it as is.

### Folders

* `favicons` contains the favicons for the web page. You shouldn't change anything here.

* `.github` contains [GitHub Actions](https://github.com/features/actions) ([docs](https://docs.github.com/en/actions)) which will automatically validate your HTML, CSS, and hyperlinks when you push (see the [**validation last step** below](#validated)). **Do not edit files here** except to create new `.yml` files for any additional actions you choose to add (you are not required to make any).

* `img` contains a descriptive image for the `README.md`.

* `js` will contain all JavaScript files you write. For example, `main.js`, where you will fill in your code. 

* `lib` will contain any JavaScript library you use. It currently includes D3. To ensure long-term survivability, **use the included D3 here rather than linking to [d3js.org](https://d3js.org) or some other CDN.** Likewise, put your other libraries here rather than loading them from elsewhere.

## Resources

These are a few places to look for information on D3. You are not limited to these resources, please do additional research on your own if nescessary. 

**Note that there are different versions of D3 (we are using version 6), so make sure the tutorials you use are up-to-date (or you at least understand what is different about v6 versus older versions).**

* Defining DOM: [https://www.w3schools.com/js/js_htmldom.asp](https://www.w3schools.com/js/js_htmldom.asp)

* What is D3? [https://d3js.org/](https://d3js.org/) 

* Example D3 Charts: [https://observablehq.com/@d3/gallery](https://observablehq.com/@d3/gallery) 

* Interactive Data Visualization for the Web by Scott Murray: Available through Northeastern Library 

* Tips and Tricks: https://leanpub.com/D3-Tips-and-Tricks/read (written for v3 but well written)

* D3 Coursera by Enrico Bertini: [https://www.coursera.org/learn/information-visualization-programming-d3js](https://www.coursera.org/learn/information-visualization-programming-d3js) 


# Instructions 
The starter code you received selects the div on your webpage with the id "d3-container" and appends an svg to it. Your task is to build a bar chart inside of that svg. Your bar chart must meet the following requirements:  

1. You must read in and plot the data in data/data.csv (provided to you). 

1. Your static plot should look like the reference image prodided in the reference folder. 

1. Add tooltip functionality to your bar chart. If a user mouses over a bar, they should see a tooltip appearing near the mouse that shows that bar's key and value. 

1. Your top priority is to implement a bar chart with tooltips. If you achieve this, then you may move on to the following: 

    1. Add two buttons to your webpage. One named "Sort Ascending", and one named "Sort Alphabetically". When a user clicks on the "Sort Ascending" button, the bars on your bar chart should be sorted from lowest value on the left to highest value on the right. When a user clicks on the "Sort Alphabetical" button, the bars on your bar chart should be sorted alphabetically, by key. 

# Homework Make-up Option

You have the option to use this in-class assignment as an opportunity to make up points on the D3 portion of hw-03. You **must** sucessfully implement the bar chart with tooltips described above before moving on to hw-03 make-up (I will not answer homework questions  unless you can show me your working bar chart, and you will get a zero on your make up if what you submit does not include a working bar chart). 

## Rules for Make-up 

You may (and are encouraged to!) work with 1-2 classmates on this make-up. They do not have to be the same classmates you worked on the original assignment with.   

If you choose to take advantage of this make-up you **must** email Ab and tell them that you plan to make-up the d3-portion of hw-03. In your email include who you are working with on the make-up. *Ab must receive this email by 5pm on 10/07/2021.* If you do not send an email by that deadline your make-up will not get graded or counted towards your grade. 

**Grading** If you submit make-up work it will be evaluated from scratch, the same way that your original submission was evaluated. If the grade you get on your make-up is higher than your original grade, I will add half of the additional points you earned to your hw-03 grade. (Ex. If you got 10 out of 30 points on your original submission and get 30 out of 30 points on your make-up, I will add 10 points ((30 - 10)/2) to your hw-03 grade.) If your make-up is lower than your original grade, your hw-03 grade will not be changed. 

Instructions:   

* Copy your data file(s) from hw-03 into the data folder for this assignment.  

* Add two new svg's to your starter code. These should be identical svg1 (the code for which was provided to you), but named svg2 and svg3.

* In svg2 implement the grouped bar chart described in hw-03. Add tooltips to the chart. 

* In svg3 implement the scatter plot described in hw-03. 


# Academic integrity
You are welcome to use D3 tutorials or resources as a starting point for your code.
However, **you must cite and reference the resources or sample code you use and explain how you use them**.
***This includes anything from [bl.ocks.org](https://bl.ocks.org/), [Observable](https://observablehq.com/@d3/gallery), or [Stack Overflow](https://stackoverflow.com/)!***
Failure to properly cite and attribute code is a breach of academic integrity.

Additionally, you should under no circumstances copy a classmate's code. You are welcome to ask fellow classmates and students for help and discuss the assignment, but **your submission should be your own work**.
See Canvas for more detail on our academic integrity policy and expectations.

# Submission

1. Ensure you updated (1) the GitHub Pages URL at the top of this `README.md` file and (2) the GitHub repository URL in `index.html` in the span with `id='forkongithub'`.

1. Commit all your local files and push them to the remote repository on GitHub which was generated by GitHub Classroom. We will grade based on what is visible on the GitHub Page.

1. Ensure all functionality required above is present in your GitHub page.

1. Create a PDF that contains the URL of your **GitHub Classroom-generated repository** and **submit it on gradescope via ic-04**. Do not submit a link to a personal repository; your repo must be within our class GitHub organization.