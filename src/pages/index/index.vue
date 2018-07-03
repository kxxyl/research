<template>
  <div class="container">
    <div>
      <div class="userinfo">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">
          <card :text="userInfo.nickName"></card>
          <p style='font-size: 30rpx;'>{{desc}}</p>
        </div>
      </div>

      <div class='section'>
        <p class='p1'>实践经历</p>
        <p class='p2'></p>
        <div v-for = '(item, index) in experience' :key = 'index' class = 'experience'>
          <p>{{item.age}}岁</p>
          <p class='itemDesc'>{{item.desc}}</p>
        </div>
      </div>

      <div class='section'>
        <p class='p1'>社会点评</p>
        <p class='p2'></p>
        <div>{{evaluate}}</div>
      </div>
      <div class='save' @click='save'>保存</div>
    </div>
    <mptoast />
  </div>
</template>

<script>
import card from '@/components/card'
import mptoast from 'mptoast'

export default {
  data () {
    return {
      desc: '最最牛逼的我',
      userInfo: {},
      evaluate: '此人特别棒',
      experience: [
        { age: '10', desc: 'sdnjka ndaks nkja dsd ' },
        { age: '15', desc: '电动门你打开到两三点大神开电脑' },
        { age: '20', desc: '大神带你卡死你打大手大脚卡刘德华那是' }
      ]
    }
  },

  components: {
    card,
    mptoast
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    save () {
      console.log(11111)
      this.$mptoast('hello~~~')
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f8e4dd;
}

.userinfo-avatar {
  width: 125rpx;
  height: 125rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #000;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.section {
  margin: 10rpx 0;
  min-height: 200rpx;
}
.p1 {
  background: #f4b3a6;
  padding: 5rpx;
  margin: 5rpx 0;
}
.p2 {
  background: #f4b3a6;
  height: 5rpx;
}
.section div {
  padding: 10rpx;
  font-size: 30rpx;
}

.experience {
  display: flex;
  justify-content: space-between;
}

.itemDesc {
  width: 80%;
}

.save {
  width: 100rpx;
  height: 50rpx;
  margin: 20rpx auto;
  border-radius: 5rpx;
  background: #f4b3a6;
  color: #fff;
  text-align: center;
}
</style>
