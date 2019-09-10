
Component({
    data: {
        x: 'xx',
        b: {
            nn: 1,
            bb: false
        }
    },
    properties: {
        yy: String,
        lll: {
            value: 124,
            type: Number,
            observer(newVal: number, oldVal: number) {
                const x = newVal + oldVal + this.data.b.nn;
                this.KKKK();
                this.setData({
                    x: 'y',
                    yy: 'y'
                })
            }
        }
    },
    lifetimes: {
        ready() {
            this.KKKK()
            //$ExpectError
            // this.data.x=1;
            this.properties.lll;
            this.data;
            this.setData({
                ll: 12,
                'uu.x': ''
            }, (d) => {
                d.yy;
                d.b.bb;
            })
        }
    },
    methods: {
        KKKK() {
            this.mmm()
            const tabbar = this.getTabBar()
            tabbar && tabbar.setData({ active: 1 })
        },
        mmm() {
            this.dataset.x;
            this.data.x;
        },
        onTest(e: event.Base) {
            this.triggerEvent(e.type)
        }
    }
})

Component({
    ext: 0,
    lifetimes: {
        ready() {
            this.ext = 1

        }
    },
    methods: {
        t() {
            const a = this.ext;
        }
    }
})

Component({
    data: {
        f: false
    },
    created() {
        this.setData({ f: true });
    },
    methods: {
        f() {
            this.created!();
            const c = this.selectComponent<{ d: string }, { f: Function }>("");
            c.data.d
            c.f()
            const allc = this.selectAllComponents("");
            allc[0].created!();
        }
    }
})

interface Item {
    id: string;
    name: string;
}
Component({
    properties: {
        list: (Array as unknown) as () => Item[], // ()=>Item[] 定义一个item[]数组的构造器
        item: {
            type: (Object as unknown) as () => Item, // ()=>Item 定义 Item Object的构造器
            observer(newData: Item, oldData: Item) {
                if (newData && oldData && newData.id === oldData.id) {
                    return;
                }
            },
        },
    },
    methods: {
        doSth() {
            console.log(this.properties.item.id);
            console.log(this.properties.list[0]);
        },
    },
});

Component({
    properties: {
        list: Array as PropType<Item[]>, // ()=>Item[] 定义一个item[]数组的构造器
        item: {
            type: (Object as unknown) as () => Item, // ()=>Item 定义 Item Object的构造器
            observer(newData: Item, oldData: Item) {
                if (newData && oldData && newData.id === oldData.id) {
                    return;
                }
            },
        },
    },
    methods: {
        doSth() {
            console.log(this.properties.item.id);
            console.log(this.properties.list[0]);
        },
    },
});