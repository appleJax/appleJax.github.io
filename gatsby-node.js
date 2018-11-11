exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				Components: `${__dirname}/src/components`,
        Common: `${__dirname}/src/components/common`,
        Images: `${__dirname}/src/images`,
        Icons: `${__dirname}/src/components/common/icons`,
        Styles: `${__dirname}/src/styles`,
        Utils: `${__dirname}/src/utils`
			},
		},
	})
}