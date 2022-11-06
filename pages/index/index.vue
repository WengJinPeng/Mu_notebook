<template>
	<view class="wrapper">
		<uni-card :isFull="true">
			<u--text :text="textValue" class="heading" prefixIcon="heart-fill" icon-style="font-size: 24px" size="18px" :bold="true" :block="true"></u--text>
			<u-grid col="2" :border="false">
				<u-grid-item v-for="(baseListItem, baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{ paddingTop: 20 + 'rpx' }" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{ baseListItem.title }}</text>
				</u-grid-item>
			</u-grid>
		</uni-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			textValue: 'Hi，你好',
			baseList: [
				{
					name: 'photo',
					title: '图片'
				},
				{
					name: 'lock',
					title: '锁头'
				}
			]
		};
	},
	onLoad() {
		this.checkTime();
	},
	computed: {},
	methods: {
		checkTime() {
			var date = new Date();
			var hour = date.getHours();
			var h = parseInt(hour);
			if (h >= 7 && h < 12) {
				this.textValue = 'Hi,早上好哟！祝心情愉悦';
			} else if (h >= 12 && h < 14) {
				this.textValue = 'Hi,中午好哟！记得吃饭哦！';
			} else if (h >= 14 && h < 18) {
				this.textValue = 'Hi,下午好哟！吃了吗？';
			} else if (h >= 19) {
				this.textValue = 'Hi,晚上好哟！早点休息哦！';
			} else if (h >= 0) {
				this.textValue = 'Hi,午夜好哟！该休息了哦！';
			}
		}
	}
};
</script>

<style>
	.wrapper{
		font-family: 冬日可爱之吻;
	}
</style>
