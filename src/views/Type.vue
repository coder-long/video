<template>
  <div class="type">
    <hello-world display="none" :padding="20+'px'">
      <div class="row" slot="home">
        <div class="col-md-12" v-for="(type) in typesList" :key="type.id">
          <MoveType :types="type" :nav="types[type.id]" @update="handleType"></MoveType>
        </div>
      </div>

      <div class="box" slot="home">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="按时间" name="second">
            <VideoList :video="video" :height="255+'px'"></VideoList>
          </el-tab-pane>
          <el-tab-pane label="按人气" name=" first">
            <div class="no">暂无内容</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import VideoList from "../components/VideoList";
import MoveType from "../components/MoveType";
import { getNavList, getVideo, getMoveList } from "../api/common";
export default {
  name: "type",
  components: {
    HelloWorld,
    MoveType,
    VideoList,
  },
  data() {
    return {
      types: {
        //
        nav: "",
        categire: "",
        rel_time: "",
        position: "",
        lang: "",
      },
      typesList: [
        {
          id: "nav",
          title: "导航",
          list: [
            {
              name: "电影",
              id: "movie",
            },
            {
              name: "电视剧",
              id: "tvshow",
            },
            {
              name: "综艺动漫",
              id: "dongman",
            },
            {
              name: "福利",
              id: "fuli",
            },
            {
              name: "资讯",
              id: "news",
            },
          ],
        },
        {
          id: "categire",
          title: "分类",
          list: [
            {
              name: "动作片",
              id: "action",
            },
            {
              name: "喜剧片",
              id: "comedy",
            },
            {
              name: "爱情片",
              id: "shit",
            },
            {
              name: "科幻片",
              id: "tele",
            },
            {
              name: "恐怖片",
              id: "kongbu",
            },
          ],
        },
        {
          id: "rel_time",
          title: "年代",
          list: [
            { name: "1969", id: "1969" },
            { name: "1952", id: "1952" },
            { name: "1940", id: "1940" },
            { name: "1942", id: "1942" },
            { name: "1975", id: "1975" },
            { name: "1949", id: "1949" },
            { name: "1972", id: "1972" },
            { name: "1951", id: "1951" },
            { name: "2019", id: "2019" },
            { name: "1973", id: "1973" },
            { name: "1937", id: "1937" },
            { name: "1948", id: "1948" },
            { name: "1967", id: "1967" },
            { name: "1985", id: "1985" },
            { name: "1974", id: "1974" },
            { name: "1960", id: "1960" },
            { name: "1953", id: "1953" },
            { name: "1961", id: "1961" },
            { name: "1958", id: "1958" },
            { name: "1978", id: "1978" },
            { name: "1959", id: "1959" },
            { name: "1990", id: "1990" },
            { name: "1993", id: "1993" },
            { name: "2010", id: "2010" },
            { name: "1996", id: "1996" },
            { name: "1988", id: "1988" },
            { name: "1968", id: "1968" },
            { name: "1994", id: "1994" },
            { name: "1999", id: "1999" },
            { name: "1966", id: "1966" },
            { name: "2018", id: "2018" },
            { name: "2013", id: "2013" },
            { name: "2001", id: "2001" },
            { name: "2003", id: "2003" },
            { name: "2014", id: "2014" },
            { name: "1983", id: "1983" },
            { name: "1989", id: "1989" },
            { name: "2006", id: "2006" },
            { name: "1984", id: "1984" },
            { name: "2005", id: "2005" },
            { name: "2011", id: "2011" },
            { name: "2017", id: "2017" },
            { name: "1981", id: "1981" },
            { name: "2016", id: "2016" },
            { name: "1987", id: "1987" },
            { name: "1963", id: "1963" },
            { name: "1956", id: "1956" },
            { name: "1998", id: "1998" },
            { name: "1992", id: "1992" },
            { name: "1977", id: "1977" },
            { name: "1965", id: "1965" },
            { name: "1980", id: "1980" },
            { name: "1964", id: "1964" },
            { name: "2002", id: "2002" },
            { name: "1995", id: "1995" },
            { name: "2008", id: "2008" },
            { name: "1979", id: "1979" },
            { name: "2015", id: "2015" },
            { name: "1970", id: "1970" },
            { name: "2012", id: "2012" },
            { name: "2007", id: "2007" },
            { name: "2000", id: "2000" },
            { name: "1957", id: "1957" },
            { name: "1986", id: "1986" },
            { name: "1982", id: "1982" },
            { name: "1991", id: "1991" },
            { name: "1997", id: "1997" },
            { name: "2004", id: "2004" },
            { name: "1939", id: "1939" },
            { name: "2009", id: "2009" },
            { name: "1962", id: "1962" },
            { name: "1955", id: "1955" },
          ],
        },
        {
          id: "position",
          title: "地区",
          list: [
            { name: "印度", id: "印度" },
            { name: "新加坡", id: "新加坡" },
            { name: "加拿大", id: "加拿大" },
            { name: "泰国", id: "泰国" },
            { name: "日本", id: "日本" },
            { name: "美国", id: "美国" },
            { name: "大陆", id: "大陆" },
            { name: "其他", id: "其他" },
            { name: "西班牙", id: "西班牙" },
            { name: "俄罗斯", id: "俄罗斯" },
            { name: "韩国", id: "韩国" },
            { name: "法国", id: "法国" },
            { name: "中国", id: "中国" },
            { name: "台湾", id: "台湾" },
            { name: "香港", id: "香港" },
            { name: "澳大利亚", id: "澳大利亚" },
            { name: "英国", id: "英国" },
          ],
        },
        {
          id: "lang",
          title: "语言",
          list: [
            { name: "汉语普通话", id: "汉语普通话" },
            { name: "法语", id: "法语" },
            { name: "其他", id: "其他" },
            { name: "德语", id: "德语" },
            { name: "英语", id: "英语" },
            { name: "粤语", id: "粤语" },
            { name: "国语", id: "国语" },
            { name: "日语", id: "日语" },
            { name: "韩语", id: "韩语" },
          ],
        },
      ],
      activeName: "second",
      video: [],
    };
  },
  created() {
    getNavList().then((res) => {
      console.log(res);
    });
    getVideo({ size: "" }).then((res) => {
      console.log(res);
      this.video = res.data.data;
    });
  },
  methods: {
    handleType({ id, type }) {
      this.types[type] = id;
      console.log(id, type);
      //发请求

      getMoveList({ position: id }).then((res) => {
        console.log(res);
      });
    },
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
.type {
  padding-top: 10px;
  width: 1160px;
  margin: auto;
}
.no {
  height: 150px;
  line-height: 150px;
}
.box {
  padding: 0 30px;
}
</style>