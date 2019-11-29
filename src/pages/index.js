import React from "react"
import Layout from "../components/global-layout"

export default ({data}) => {
    
    return (
    <Layout>
        <div>
            <h3>Log</h3>
            <p>
                中文的样式是真的头疼...<br/>
                Jekyll,Hexo都玩过，现在的这个版本是Gatsby构建的，主题从Gatsby Tutorial中的
                hello-world自改而成。Github可见：<a href="https://github.com/litchi-li/litchi-li.github.io/">Litchi</a>。
                源码位于source分支，最终发布位于master分支。Gatsby构建静态页面可见：<a href="https://www.gatsbyjs.org/tutorial/">Gatsby.js Tutorial</a>。<br/>
                那么多年过去了，内容没有加过多少，希望以后能后进步。 --- 2019/11/29 Wistron SH
            </p>
        </div>

        <div>
            <h3>What i have done</h3>
            <div>
                Litchi Dan
            </div>

            <div>
                Leetcode
            </div>

            <div>
                其它奇奇怪怪的东西
            </div>
        </div>

        <div>
            <h3>What i want to do</h3>
            <div>
                一个C++编译器
            </div>

            <div>
                一个64位的OS
            </div>
        </div>

    </Layout>
    )
}
