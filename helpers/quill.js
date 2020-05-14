export const QuillModules = {
    toolbar: [
        ['bold', 'italic', 'underline'],
        [{'header': '1'}, {'header': '2'}, { header: [3, 4, 5, 6] }],
        [{'list': 'bullet'}, {'list': 'ordered'}],
        ['link', 'video'],    
        [{'color': []}, {'background': []}],
        [{'script': 'super'}],
        ['clean']
    ]
};

export const QuillFormats = [
    'background',
    'bold',
    'color',
    'italic',
    'link',
    'underline',
    'header',
    'list',
    'video',
    'script'
];
