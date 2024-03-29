const layout = [
    {
        path: '/',
        name:'Admin Dashboard',
        component: resolve => require(['pages/admin/index'], resolve),
        meta: {
            title: "Admin Dashboard",
        }
    },
    {
        path: '/admin/users',
        component: resolve => require(['pages/admin/users'], resolve),
        meta: {
            title: "Users",
        }
    },
    {
        path: '/admin/users/create',
        component: resolve => require(['pages/admin/create-user'], resolve),
        meta: {
            title: "User Registration",
        }
    },
    {
        path: '/admin/users/view/:id',
        props: true,
        component: resolve => require(['pages/admin/view-user'], resolve),
        meta: {
            title: "View User",
        }
    },
    {
        path: '/admin/users/edit/:id',
        props: true,
        component: resolve => require(['pages/admin/edit-user'], resolve),
        meta: {
            title: "Edit User",
        }
    },
    {
        path: '/admin/category',
        component: resolve => require(['pages/admin/category'], resolve),
        meta: {
            title: "Category",
        }
    },
    {
        path: '/admin/category/edit/:category_id',
        component: resolve => require(['pages/admin/edit-category'], resolve),
        meta: {
            title: "Edit Category",
        }
    },
    {
        path: '/admin/category/create',
        component: resolve => require(['pages/admin/create-category'], resolve),
        meta: {
            title: "Create Category",
        }
    },
    {
        path: '/admin/topic-area',
        component: resolve => require(['pages/admin/topic_area'], resolve),
        meta: {
            title: "List of Topic Area",
        }
    },
    {
        path: '/admin/topic-area/edit/:topic_id',
        component: resolve => require(['pages/admin/edit-topic-area'], resolve),
        meta: {
            title: "Updating Existing Topic Area",
        }
    },
    {
        path: '/admin/topic-area/create',
        component: resolve => require(['pages/admin/create-topic-area'], resolve),
        meta: {
            title: "Create a new Topic Area",
        }
    },
    {
        path: '/admin/questionmanagement',
        component: resolve => require(['pages/admin/test'], resolve),
        meta: {
            title: "Questions List",
        }
    },
    {
        path: '/admin/questionmanagement/:category_id/:test_type/',
        component: resolve => require(['pages/admin/question'], resolve),
        meta: {
            title: "Questions List",
        }
    },
    {
        path: '/admin/question-management-edit/:question_id',
        component: resolve => require(['pages/admin/edit-question'], resolve),
        meta: {
            title: "Update Question",
        }
    },
    {
        path: '/admin/results',
        component: resolve => require(['pages/admin/results'], resolve),
        meta: {
            title: "Test Results",
        }
    },
    {
        path: '/admin/reports',
        component: resolve => require(['pages/admin/reports'], resolve),
        meta: {
            title: "Reports",
        }
    },
    {
        path: '/admin/logs',
        component: resolve => require(['pages/admin/logs'], resolve),
        meta: {
            title: "Users Logs",
        }
    },
    {
        path: '/index2',
        component: resolve => require(['pages/index2'], resolve),
        meta: {
            title: "Dashboard2",
        }
    },
    {
        path: '/product_details',
        component: resolve => require(['pages/e-commerce/product_details'], resolve),
        meta: {
            title: "Product details",
        }
    },
    {
        path: '/product_edit',
        component: resolve => require(['pages/e-commerce/product_edit'], resolve),
        meta: {
            title: "Product Edit",
        }
    },
    {
        path: '/admin/e_dashboard',
        component: resolve => require(['pages/e-commerce/e_dashboard'], resolve),
        meta: {
            title: "Studdents",
        }
    },


    {
        path: '/admin/reports',
        component: resolve => require(['pages/card'], resolve),
        meta: {
            title: " Cards",
        }
    },
    {
        path: 'buttons',
        component: resolve => require(['pages/buttons'], resolve),
        meta: {
            title: "Buttons",
        }
    },
    {
        path: '/admin/results',
        component: resolve => require(['pages/radios_checkboxes'], resolve),
        meta: {
            title: " Radios & Checkboxes",
        }
    },
    {
        path: 'vue-datepicker',
        component: resolve => require(['pages/vue-datepicker'], resolve),
        meta: {
            title: " Datepickers",
        }
    },
    {
        path: 'form_editors',
        component: resolve => require(['pages/form_editors'], resolve),
        meta: {
            title: " Form Editors",
        }
    },
    {
        path: 'notifications',
        component: resolve => require(['pages/notifications'], resolve),
        meta: {
            title: " Notifications",
        }
    },
    {
        path: 'modals',
        component: resolve => require(['pages/modals'], resolve),
        meta: {
            title: " Modals",
        }
    },
    {
        path: 'vscroll',
        component: resolve => require(['pages/vscroll'], resolve),
        meta: {
            title: " Vscroll",
        }
    },
    {
        path: 'vue-slider',
        component: resolve => require(['pages/vue_slider'], resolve),
        meta: {
            title: " Vue Slider",
        }
    },
    {
        path: 'ui_elements',
        component: resolve => require(['pages/ui_elements'], resolve),
        meta: {
            title: " UI Elements",
        }
    },
    {
        path: 'typography',
        component: resolve => require(['pages/typography'], resolve),
        meta: {
            title: "Typography",
        }
    },
    {
        path: 'api',
        component: resolve => require(['pages/api'], resolve),
        meta: {
            title: "API",
        }
    },
    {
        path: 'timeline',
        component: resolve => require(['pages/timeline'], resolve),
        meta: {
            title: "Timeline",
        }
    },
    {
        path: 'chat',
        component: resolve => require(['pages/chat'], resolve),
        meta: {
            title: "Chat",
        }
    },
    {
        path: 'calendar',
        component: resolve => require(['pages/calendar'], resolve),
        meta: {
            title: "Calendar",
        }
    },
    {
        path: 'simple_tables',
        component: resolve => require(['pages/simple_tables'], resolve),
        meta: {
            title: "Simple Tables",
        }
    },
    {
        path: 'advanced_tables',
        component: resolve => require(['pages/advanced_tables'], resolve),
        meta: {
            title: "Advanced Tables",
        }
    },
    {
        path: 'widgets',
        component: resolve => require(['pages/widgets'], resolve),
        meta: {
            title: "Widgets",
        }
    },
    {
        path: 'chartist',
        component: resolve => require(['pages/chartist'], resolve),
        meta: {
            title: "Chartist Charts",
        }
    },
    {
        path: 'frappe-charts',
        component: resolve => require(['pages/frappe_charts'], resolve),
        meta: {
            title: "Frappe Charts",
        }
    },
    {
        path: 'e_linecharts',
        component: resolve => require(['pages/e_linecharts'], resolve),
        meta: {
            title: "Echarts - Line",
        }
    },
    {
        path: 'e_barcharts',
        component: resolve => require(['pages/e_barcharts'], resolve),
        meta: {
            title: "Echarts - Bar",
        }
    },
    {
        path: 'e_piecharts',
        component: resolve => require(['pages/e_piecharts'], resolve),
        meta: {
            title: "Echarts - Pie",
        }
    },
    {
        path: 'gmaps',
        component: resolve => require(['pages/gmaps'], resolve),
        meta: {
            title: "Maps",
        }
    },
    {
        path: 'gallery',
        component: resolve => require(['pages/gallery'], resolve),
        meta: {
            title: "Gallery",
        }
    },
    {
        path: 'multi_file_upload',
        component: resolve => require(['pages/multi_file_upload'], resolve),
        meta: {
            title: "Multi File Upload",
        }
    },
    {
        path: 'vue_dropzone',
        component: resolve => require(['pages/vue-dropzone'], resolve),
        meta: {
            title: "Vue Dropzone",
        }
    },
    {
        path: 'user_profile',
        component: resolve => require(['pages/user_profile'], resolve),
        meta: {
            title: "User Profile",
        }
    },
    {
        path: 'add_user',
        component: resolve => require(['pages/add_user'], resolve),
        meta: {
            title: "Add User",
        }
    },
    {
        path: 'users_list',
        component: resolve => require(['pages/users_list'], resolve),
        meta: {
            title: "Users List",
        }
    },
    {
        path: 'edit_user',
        component: resolve => require(['pages/edit_user'], resolve),
        meta: {
            title: "Edit User",
        }
    },
    {
        path: 'blank',
        component: resolve => require(['pages/blank'], resolve),
        meta: {
            title: "Blank",
        }
    },
    {
        path: 'transitions',
        component: resolve => require(['pages/transitions'], resolve),
        meta: {
            title: "Transitions",
        }
    },
    {
        path: 'invoice',
        component: resolve => require(['pages/invoice'], resolve),
        meta: {
            title: "Invoice",
        }
    },
    {
        path: 'contact_us',
        component: resolve => require(['pages/contact_us'], resolve),
        meta: {
            title: "Contact Us",
        }
    },
    {
        path: 'Pricing',
        component: resolve => require(['pages/pricing'], resolve),
        meta: {
            title: "Pricing",
        }
    }
]

export default layout
