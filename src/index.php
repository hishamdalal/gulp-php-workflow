<?php
require_once('functions.php');

$url = full_url( $_SERVER );

// $path = parse_url($url, PHP_URL_HOST);
// echo __DIR__;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gulp PHP Workflow</title>
    <link rel="stylesheet" href="<?=$url?>assets/bundle.css" />
</head>

<body>
    <header id="main-header">
        <nav>
            <div class="logo">LOGO</div>
            <div class="menu">
                <ul class="items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="tools">
                    <li><form class="search-form"><input class="search-input" name="q" /><i class="search-icon icon-search-1"></i></form></li>
                    <li>
                        <div class="light-dark-switch">
                            <label title="Auto" class="icon-cog">  <input type="radio" name="color-scheme" id="color-scheme-auto"  value="auto" checked></label>
                            <label title="Light" class="icon-sun-1"><input type="radio" name="color-scheme" id="color-scheme-light"  value="light" ></label>
                            <label title="Dark" class="icon-moon"> <input type="radio" name="color-scheme" id="color-scheme-dark" value="dark" ></label>
                        </div>                    
                    </li>
                </ul>
                <label class="nav-toggle icon-menu">
                    <input type="checkbox" id="toggle" />
                    <div class="mobile-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </label>
            </div>
        </nav>
    </header>

    <main class="home">
        <div class="container">
            <div class="hero">
                <h1>Hello world</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptates reprehenderit necessitatibus, sapiente impedit reiciendis, libero nulla? </p>
                <p>Hic, provident ea cumque fuga adipisci voluptates non consequuntur dolores nobis eum facilis dolore asperiores tenetur quia laudantium est autem.</p>
                <button id="button" class="btn">Counter: 0</button>
            </div>
            <article class="post">
                <h3 class="title">Post title</h3>
                <img class="thumb" src="<?=$url?>assets/img/peter-livesey-unsplash.jpg" alt="">
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores, quasi aut, non pariatur esse, impedit voluptatem praesentium beatae architecto possimus? Quae delectus quisquam perferendis eius dolorem. Molestias, inventore consequuntur?</p>
                    <a class="btn read-more" href="#">Read more</a>
                </div>
            </article>
        </div>
        <aside>
            <h3 class="title">Side Title</h3>
            <ul class="list">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
        </aside>
    </main>

    <div class="screen-size">
        <div class="xxl">XXL</div>
        <div class="xl">XL</div>
        <div class="lg">LG</div>
        <div class="md">MD</div>
        <div class="sm">SM</div>
        <div class="xs">XS</div>
        <div class="xxs">XXS</div>
        <div class="xxxs">XXXS</div>
    </div>
    
    <script src="<?=$url?>assets/bundle.js"></script>
</body>
</html> 