
//密码修改
<template>
  <el-container id="home">
    <!-- 左侧 -->
    <leftMenu></leftMenu>

    <!-- 右侧 -->
    <el-container id="mainContent">
      <!-- 顶部 -->
      <rightTop></rightTop>
      <!-- 中间 -->
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>账号密码修改</h3>
          </div>
          <div class="text item">
            <!-- 模板的内容 -->
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="top"
            >
              <el-form-item label="原始密码" prop="oldpwd">
                <el-input type="password" v-model="ruleForm2.oldpwd" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="passCheck">
                <el-input type="password" v-model="ruleForm2.passCheck" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部 -->
      <rightBottom></rightBottom>
    </el-container>
  </el-container>
</template>

<script>
//引入组件
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";
export default {
  data() {
    //自定义验证2次密码是否一致
    var validatePassword = (rule, value, callback) => {
      if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    //返回的数据
    return {
      //数据对象
      ruleForm2: {
        pass: "",
        username: "",
        passCheck: "",
        usergroup: ""
      },
      //验证规则
      rules2: {
       
        pass: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        passCheck: [
          { required: true, trigger: "blur", message: "确认密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "确认密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          //调用自定义的验证方法验证两次密码是否一致
          { validator: validatePassword, trigger: "blur" }
        ],
      
      }
    };
  },
  components: {
    //注册组件
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    //提交表单的方法
    submitForm(formName) {
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          //alert('√ 表单验证成功!');
          //发起ajax请求去后端做数据库的验证
          //location.href="/";
          this.$router.push("/"); //使用路由对象的push实现跳转
        } else {
          //alert("× 表单验证失败!");
          return false;
        }
      });
    },
    //重置表单的方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>





