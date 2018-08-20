<template>
  <div class="appcontent">
     <!--header  -->
    <header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">vue项目实践</h1>
		</header>
     <!-- content -->
		 <router-view></router-view>
    
     <!-- footer -->
     <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				 <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label ">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>

</template>
<script>
  
</script>
<style lang="scss" scoped>
.appcontent{
  padding-top: 40px;
}
</style>

