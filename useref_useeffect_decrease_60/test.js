var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1'
}

var exerciseConfig = {
    api: 'https://domain-bai-tap',
    ...defaultConfig,
    
}

var {api: loz, apiVersion} = exerciseConfig 

console.log(loz)
