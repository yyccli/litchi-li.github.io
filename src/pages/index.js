import React from "react"
import Layout from "../components/global-layout"
import IndexSytles from "../styles/global-layout.module.css"
import {Link} from "gatsby"

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
                那么多年过去了，内容没有加过多少，希望以后能后进步。 -- 2019/11/29 Wistron SH
            </p>
        </div>

        <div>
            <h3>What i have done</h3>
            <div>
                <p>
                    <i>Litchi Dan </i> <br />
                    18年底买的一块开发板
                </p>
                <Link className={IndexSytles.global_layout_link} to="/litchi-dan_description/">--Litchi Dan</Link>
            </div>

            <div>
                <p>
                    <i>Leetcode </i> <br />
                    19年初才开始做的题，到现在也就60多道吧，很懒，解答也不一定认真看，AC的也很少优化。
                </p>
                <Link className={IndexSytles.global_layout_link} to="/leetcode_description/">--Leetcode</Link>
            </div>

            <div>
                <p>
                    <i>HyperLedger Fabric</i> <br />
                    19年4月开始帮兔子写过的一点代码，关于HyperLedger Fabric还有Smart contract，19年底又接了一个新的
                    项目。
                </p>

                <Link className={IndexSytles.global_layout_link} to="/hyperledger-fabric_notes/">--Notes on HyperLedger Fabric</Link>
            </div>

            <div>
                <p>
                    <i>Others</i> <br />
                    日常的碎碎念儿~
                </p>
                <Link className={IndexSytles.global_layout_link} to="/whatyouneed_breakup/">--我要WhatYouNeed-About break up</Link>
                
            </div>
        </div>

        <div>
            <h3>What i want to do</h3>
            <div>
                <p>
                    <i>A C++ Compiler</i> <br />
                </p>
            </div>

            <div>
                <p>
                    <i>A x64 OS</i> <br />
                </p>
            </div>
        </div>

    </Layout>
    )
}
