(function () {
    var gridUrl = 'https://media.test.dev-gutools.co.uk';

    function openModal () {
        var modalTemplate = document.querySelector('#grid-modal-template');
        var modalNode = document.importNode(modalTemplate.content, true);
        modalNode.querySelector('iframe').src = gridUrl;
        document.body.appendChild(modalNode);
    }

    function closeModal () {
        removeMessageListener();
        document.body.removeChild(document.querySelector('.modal'));
    }

    function addCloseModalListener () {
        document.querySelector('.modal__dismiss').addEventListener('click', function () {
            closeModal();
        });
    }

    function isValidMessage (data) {
        return data && data.crop && data.crop.data && data.image && data.image.data;
    }

    function removeCurrentImage () {
        var currentImage = document.querySelector('.grid-image');

        if (currentImage) {
            document.body.removeChild(currentImage);
        }
    }

    function addNewImage (cropData) {
        var imageTemplate = document.querySelector('#grid-image-template');
        var imageNode = document.importNode(imageTemplate.content, true);

        // the master is really big so you'd most likely want to render one of the `cropData.assets`
        imageNode.querySelector('img').src = cropData.master.secureUrl;
        console.log(cropData);
        document.body.appendChild(imageNode);
    }

    function onMessage (event) {
        if (event.origin !== gridUrl) {
            return;
        }

        var data = event.data;

        if (!data) {
            console.log('no data...');
            return;
        }

        if (!isValidMessage(data)) {
            console.log('not a valid message...');
            return;
        }

        removeCurrentImage();
        addNewImage(data.crop.data);
        closeModal();
    }

    function addMessageListener () {
        window.addEventListener('message', onMessage, false);
    }

    function removeMessageListener () {
        window.removeEventListener('message', onMessage, false);
    }

    document.querySelector('#pick-image').addEventListener('click', function () {
        addMessageListener();
        openModal();
        addCloseModalListener();
    });
})();