<template>
  <div class="app-container">

    <el-form ref="form" :model="form" :rules="rules" label-width="140px">
      <el-form-item label="课程id" prop="ccId">
        <el-input v-model="form.stuId" placeholder="请输入课程id" />
      </el-form-item>
      <el-form-item label="学生id" prop="stuId">
        <el-input v-model="form.stuId" placeholder="请输入学生id" />
      </el-form-item>
      <el-form-item label="课程考试答案图片地址数组" prop="anPath">
        <el-input v-model="form.anPath" type="textarea" placeholder="请输入内容" />
      </el-form-item>
      <div style="text-align: center">
        <el-button type="primary" @click="handleAdd">新增</el-button>
      </div>

    </el-form>


  </div>
</template>

<script>
import { listAnswer, getAnswer, delAnswer, addAnswer, updateAnswer } from "@/api/system/answer";

export default {
  name: "Answer",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 课程考试答案库表格数据
      answerList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        ccId: null,
        stuId: null,
        teaId: null,
        anPath: null,
        anGrade: null,
        anRemark: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询课程考试答案库列表 */
    getList() {
      this.loading = true;
      listAnswer(this.queryParams).then(response => {
        this.answerList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        ccId: null,
        stuId: null,
        teaId: null,
        anPath: null,
        anGrade: null,
        anRemark: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加课程考试答案库";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getAnswer(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改课程考试答案库";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateAnswer(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addAnswer(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除课程考试答案库编号为"' + ids + '"的数据项？').then(function() {
        return delAnswer(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/answer/export', {
        ...this.queryParams
      }, `answer_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

<style scoped lang="scss">
.app-container{
  width: 800px;
  margin: 0 auto;
}
</style>
