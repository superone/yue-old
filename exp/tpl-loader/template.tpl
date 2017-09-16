<style type="text/less">

</style>

<template type="text/html">
    <div yue-app="main-content-app">

        <div>
            <a @up-button href="javascript:;"></a>
            <ul>
                <ol>
                    <li @tabs-li>
                        <a href="javascript:;">{{item.title}}</a>
                        <a href="javascript:;"></a>
                    </li>
                </ol>
            </ul>
            <a @down-button href="javascript:;"></a>
            <a @more-button href="javascript:;"></a>
        </div>

        <div>
            <tab-div></tab-div>
            <sub-div path="./subdiv"></sub-div>
        </div>

        <sub-div></sub-div>
    </div>
</template>

<template name="sub-div" type="text/html">
    <div @tab-div class="tab-div">
        <font size="50" style="color:red;font-size: 50px;">:{{index}}:{{item.title}}</font>            
    </div>
</template>

<template name="tab-div" path="./subtemplate">
</template>