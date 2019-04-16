// DocSection: stuff_changed_codename
// const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .languageParameter('en-US')
    .equalsFilter('system.language', 'en-US')
    .getObservable()
    .subscribe(response => console.log(response.items));


// EndDocSection

// DocSection: javascrstuff
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '<YOUR_PROJECT_ID>',
    enablePreviewMode: true,
    previewApiKey: "<YOUR_PREVIEW_API_KEY>",
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article)
    ]
});

deliveryClient.item('on_roasts')
    .getObservable()
    .subscribe(response => console.log(response));
// EndDocSection

// DocSection: empty




// EndDocSection

// DocSection: a_lot_of_stuff
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .getObservable()
    .subscribe(response => console.log(response));
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .getObservable()
    .subscribe(response => console.log(response));
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .getObservable()
    .subscribe(response => console.log(response));
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}

const deliveryClient = new KenticoCloud.DeliveryClient({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.items()
    .type('article')
    .getObservable()
    .subscribe(response => console.log(response));
// EndDocSection
