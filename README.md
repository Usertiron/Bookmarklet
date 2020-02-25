# Bookmarklet

Like most developers, I found myself constantly having to re-enter unique information into dozens of fields on forms for testing purposes. At some point it starts to get on your nerves, because this is a fairly routine operation and eats plenty of time. So it is a good candidate for automation. Bookmarklets allow you to always keep your common tasks on a web page just a click away.

In my synthetic example, I used a simple contact form from the site https://www.omadahealth.com/contact and touched on the most common types of locators in my practice - this is searching for an element by id, dynamic id and xpath. Also added auxiliary methods for generating unique data.

Now, whenever I come across any form, I can just click my custom bookmarklet and It’s filled in. Yippee! This allowed me to free up a lot of time

## How to add a bookmarklet to a browser?

1. On the bookmark bars of your browser (Chrome in my case) click on "Right Mouse Button" -> Add Page
2. On the opened popup specify the name of your bookmarklet and put your script into URL field. But be careful, you need to remove all comments from the ```.js``` script
3. Click on [Save] button

Congrats! Bookmarklet has been added to your browser!

## How to use it?

It's simple as 1, 2, 3
All you have to do is:
- Navigate to the page where you want your bookmarklet to apply to.
- Click the bookmarklet on your Bookmarks Toolbar and you will see a bit of magic :)

![example](https://github.com/Usertiron/Bookmarklet/blob/master/bk.gif)
