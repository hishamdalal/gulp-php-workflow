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
            <div class="logo">
                <img src="assets/img/logo.png" /> Gulp PHP Workflow
            </div>
            <div class="menu">
                <ul class="items">
                    <li><a class="active" href="#">Home</a></li>
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
        <div class="main-container">
            <div class="hero">
                <h1>Hello world مرحباً بالعالم</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quas voluptates reprehenderit necessitatibus, sapiente impedit reiciendis, libero nulla? </p>
                <p>Hic, provident ea cumque fuga adipisci voluptates non consequuntur dolores nobis eum facilis dolore asperiores tenetur quia laudantium est autem.</p>
                <button id="button" class="btn outline-secondary outline-hover:accent ">Counter: 0</button>
            </div>
            <article class="post">
                <h3 class="title">Post title عنوان المقال</h3>
                <img class="thumb" src="<?=$url?>assets/img/peter-livesey-unsplash.jpg" alt="">
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolores, quasi aut, non pariatur esse, impedit voluptatem praesentium beatae architecto possimus? Quae delectus quisquam perferendis eius dolorem. Molestias, inventore consequuntur?</p>
                    <p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …</p>
                    <p>وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي.</p>
                    <p>وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد. من كتاب “حول أقاصي الخير والشر”</p>
                    <a class="btn read-more" href="#">Read more</a>
                </div>
            </article>
            <form class="r-container">
                
                <label class="form-switch">
                    <input type="checkbox">
                    <i></i> label text 
                </label>

                <div class="tabs-container horizontal">
                    <ul class="tabs">
                        <li class="tab active">Tab 1</li>
                        <li class="tab">Tab 2</li>
                        <li class="tab">Tab 3</li>
                    </ul>
                    <div class="contents">
                        <div class="content active">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, non dolore delectus ipsum quia reprehenderit error natus amet maiores distinctio nisi eligendi velit pariatur tenetur nostrum necessitatibus sequi. Eum, nam?
                        Atque, cum explicabo sint saepe sit doloribus eos deserunt obcaecati doloremque culpa tempora commodi sequi beatae nisi dolorem cumque illo officiis. Debitis laudantium perferendis natus quidem praesentium aperiam possimus officia.</div>

                        <div class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores quod consequuntur soluta ex odio, adipisci necessitatibus quia voluptatum. Commodi est suscipit assumenda sint repellat voluptates, vel voluptas itaque dolore.</div>
                        <div class="content">Test</div>
                    </div>
                </div>

                <div class="group-btn mt-20">
                    <button class="btn fg-light:hover bg-accent:hover alert" type="button" 
                        data-alert-msg="Created successfully" 
                        data-alert-title="Success" 
                        data-alert-type="success">btn 1</button>

                    <button class="btn fg-light:hover bg-accent:hover alert" type="button" 
                        data-alert-msg="Coudnt do the proccess!"
                        data-alert-title="Fail!"
                        data-alert-type="error">btn 2</button>
                </div>
                
                <div class="group-btn mt-20">
                    <label class="btn">
                        <input class="fg-light:hover bg-accent:hover" type="radio" name="group-radio" />
                        label text 
                    </label>
                    <label class="btn">
                        <input class="fg-light:hover bg-accent:hover" type="radio" name="group-radio" />
                        label text 
                    </label>
                </div>
                <ul class="notifications"></ul>
            
            <div class="toast-buttons group-btn">
                <button type="button" class="btn txt-light bg-success" data-toast data-type="success" data-msg="Message success">Success</button>
                <button type="button" class="btn txt-light bg-error" data-toast data-type="error" data-msg="Message error Something went worng">Error</button>
                <button type="button" class="btn txt-light bg-warning" data-toast data-type="warning" data-msg="Message warning">Warning</button>
                <button type="button" class="btn txt-light bg-info" data-toast data-type="info" data-msg="Message info">Info</button>
                <button type="button" class="btn txt-light bg-question" data-toast data-type="question" data-msg="Message question">Question</button>
            </div>

            </form>
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
        <div class="xxxl">XXXL</div>
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
