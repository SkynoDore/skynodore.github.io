import ExpandedProject from '../components/expanded-project';
export default function SocialNetwork() {
    return ( 
    <ExpandedProject title="Social Network on Laravel" images={["images/social-network.avif", "images/social-network2.avif", "images/social-network3.avif", "images/social-network4.avif"]}
    github="https://github.com/SkynoDore/laravel-social-network" description="*WORK IN PROGRESS*<br> This is a social network prototype built with Laravel and Blade, styled using Tailwind CSS, enhanced with Alpine.js for interactivity, and powered by a MariaDB database.
<p>
Current features include:
</p>

<li>Simple user registration and login
</li>

<li>Profile customization
</li>

<li>Park finder with multiple filters and geolocation
</li>

<li>Image-based posts
</li>

<li>User comments system
</li>

<li>like and dislike system for posts</li><br>

<p>
The project is still in its early stages, with basic functionality implemented.

The goal is to gradually expand it into a more complete and interactive platform.</p>
"/>
    )
}