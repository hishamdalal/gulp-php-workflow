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
            <ul class="items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul class="tools">
                <li><form class="search-form"><input class="search-input" name="q" /><i class="search-icon"></i></form></li>
                <li>
                    <div class="light-dark-switch">
                        <label><input type="radio" name="color-scheme" id="color-scheme-auto" checked>Auto</label>
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            <input type="radio" name="color-scheme" id="color-scheme-light">
                        </label>
                        <label>
                            <input type="radio" name="color-scheme" id="color-scheme-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        </label>
                    </div>                    
                </li>
            </ul>
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