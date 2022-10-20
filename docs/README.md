---
...
---
# Hello VuePress

## tt

## 代码块的高亮
``` js {1,3-4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

this.$site:

{{this.$site}}

<span v-for="i in 3"> {{i}}</span>

this.$page:{{this.$page}}
## index循环
<p v-for="item,index in  $site"> {{item, index}}</p>

## this.$route
<!-- {{this.$router}} -->
