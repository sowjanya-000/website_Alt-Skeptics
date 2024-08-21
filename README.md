# **Alt-Skeptics**

**Alt-Skeptics** is a blog and article posting website where users can easily post, manage, and filter articles based on various categories. Built using HTML, CSS, and JavaScript, with data stored in SQLite3, this platform is designed for a seamless and interactive blogging experience.

## **Project Setup**

To get started with the project, follow these steps:

1. **Import the Project**

   Clone or download the project files into your desired directory.

2. **Install Required Dependencies**

   Open your terminal and navigate to the project directory:

   ```sh
   D:\AltSkeptics>npm init -y
   D:\AltSkeptics>npm install express sqlite3 body-parser multer path
   ```

3. **Run the Project**

   Once dependencies are installed, start the server by running:

   ```sh
   D:\AltSkeptics>node app.js
   ```

## **Website Overview**

### **Home/Landing Page**

The home page displays all the posts and articles based on the selected filters. By default, the page shows all articles, but users can apply filters by category to view specific content. The search box at the top allows users to search articles using keywords.

- **Filter by Category:** The filter is set based on the category chosen when the article was posted.
  
- **Interactive Hover Effects:** Hovering over post tiles enhances interactivity, making the user experience more engaging.

- **Viewing Articles:** Users can click on the title of the article or the "Read More" link to view the full content of any post.

### **Writing a Post**

Clicking on the "Write" option in the header navigates users to the post creation page. Here, users can:

- **Add a Title, Category, Content, and Image:** The text editor supports formatting, font customization, headings, alignments, and more.

- **Post Submission:** After submitting the post, users are redirected to the home page, where their new post appears at the top of the list.

### **Admin Central**

The Admin Central allows users to manage existing posts:

- **Delete Posts:** Admins can delete posts directly from the interface.
  
- **Access:** Admin Central is accessible via the admin symbol

======================================================================================


This is Alt-Skeptics , website where one can post and manage the articles/blogs.

[image](https://github.com/user-attachments/assets/f282b013-43fd-4f72-9b32-2cd24a7555cf)

![image](https://github.com/user-attachments/assets/a46b958d-413d-4b0f-95dd-603444d08292)


![image](https://github.com/user-attachments/assets/a4fa2c13-05c6-429e-a936-ed2e959e6cf1)





Built in Html,css,javascript and data is being stored in sqlite3.

The home/landing page renders the posts/articles based on the filters added. 


As in the below image,  its filtered on All which would show all the articles that have been posted.

![image](https://github.com/user-attachments/assets/8555d266-7c4e-49b9-9e3b-5216ff65dba3)


This can be changed to desired filters on click. The filter is set on category of the post while posting the article.

![image](https://github.com/user-attachments/assets/c46dbb92-d891-4493-9cce-c409955852ad)




Search box has been incorporated that allows searching articles with keywords.

The hover on the post/article tiles makes it more interactive.

![image](https://github.com/user-attachments/assets/7aaca464-dbd3-4e6a-968d-78cb0d5fc75b)


The Article/post can be viewed clicking on the Title of the article or clicking on the Read More.

![image](https://github.com/user-attachments/assets/95c39ace-bb9a-4cbc-9b3e-fc1602182a9c)

![image](https://github.com/user-attachments/assets/5c3b2f85-913d-4067-85ff-331a532ee740)



Every post tile is rendered with tag that suggests what category under the article falls.

The footer has the links that rediret to several platform, namely github,twitter,gmail.

The header consist of option to write a new post and Admin Central.

Write Post-

As in the image , clicking on "Write" takes user to a page to add the post . 

![image](https://github.com/user-attachments/assets/d9bf4aab-b063-4929-a1cb-d37c700a8063)

It expects Title,category ,content and image as input. The text box allows user to format the text,the font of content, headings, and alignments and more.

After writing the post ,user is redirected to home page, where they can find the recently created post up the posts section.

Following is the snapshot of how a post/article looks like.

![image](https://github.com/user-attachments/assets/3998f7d8-2565-431b-89f9-53e08fc3dc17)


In case user wants to delete the post, they can click on admin symbol to the left of "Write". It allows user to delete the posts and has link to Write a new post and back to home.

![image](https://github.com/user-attachments/assets/e1f1eb34-d2fc-4c27-946a-8c3713374c81)








