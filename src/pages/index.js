import React from "react"
import Layout from "../components/global-layout"
import IndexSytles from "../styles/global-layout.module.css"
import {Link} from "gatsby"

export default ({data}) => {
    
    return (
    <Layout>
        <div>
            <h3>Friends</h3>
            <p>
                进来请先看大佬，谢谢~ <span role="img" aria-label="rolling on the floor laughing">&#129315;</span>
            </p>
            <a href="http://aiifabbf.github.io/">Cannon & Baroque</a>
        </div>

        <div>
            <h3>Log</h3>
            <p>
                今天开始有的文章会给图片了，图片都挂在Github上面，估计日常会无缘无故连不上或者挂掉吧哈哈哈哈 <span role="img" aria-label="laugh">&#128518;</span> 可以加emoji了，
                就是方法比较蠢，要自己去查unicode还要把16进制转成10进制(●'◡'●) --2020/01/10 SH
            </p>
            <p>
                <span role="img" aria-label="partying face">&#129395;</span>新年到了，回顾2019年，大概觉得分手是最正确的决定之一叭。正在经历着不断堕落和养成坏习惯的日子... --2020/01/01 SH
            </p>
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
                <Link className={IndexSytles.global_layout_link} to="/whatyouneed_breakup/">--我要WhatYouNeed-About break up</Link> <br />
                <Link className={IndexSytles.global_layout_link} to="/whatyouneed_storywiththreeboys/">--我要WhatYouNeed-我和三个考研大男孩的故事</Link>
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
                <Link className={IndexSytles.global_layout_link} to="/os_notes/">--Notes on x64 OS</Link>
            </div>

            <div>
                <p>
                    <i>Dive into Deep Learning</i> <br />
                    沐神的《动手学深度学习》学习杂记~
                </p>
                <Link className={IndexSytles.global_layout_link} to="/dl_notes/">--Notes on Dive into DL</Link>
            </div>
        </div>

    </Layout>
    )
}
