import { Page, Locator } from "@playwright/test";

class BlogPage{
    page: Page;
    blogMenu: Locator;
    recentPosts: Locator;

    constructor(page){
        this.page = page;
        this.blogMenu =  page.locator('#zak-primary-nav >> text=blog');
        this.recentPosts =  page.locator('#recent-posts-3 ul li');

    
    }

    async navigate(){
        await this.page.goto("/");
    }

     findlenghtOfRecentPosts(){
        const lenghtOfRecentPosts =  this.recentPosts.count();
       // console.log(lenghtOfRecentPosts) 
        return lenghtOfRecentPosts;
            
    }
}

export default BlogPage;