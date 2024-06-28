import { type file } from "@/stores/type";
import { ref, type Ref, markRaw } from "vue";
import {
  ElIcon,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElPopover,
  ElInput,
} from "element-plus";
import {
  Document,
  VideoPlay,
  MoreFilled,
  Download,
  DocumentDelete,
  Edit,
  Picture,
  Headset,
} from "@element-plus/icons-vue";

export const files: Ref<file[]> = ref([
  {
    name: "123",
    isFolder: false,
    updateTime: "2003-01-2",
    id: "adsacafasf",
    fileType: "image",
    size: 22,
    icon: markRaw(Picture),
    isVisible: false,
    options: [
      {
        name: "下载",
        icon: markRaw(Download),
        click: () => {
          ElMessage("下载");
        },
      },
      {
        name: "删除",
        icon: markRaw(DocumentDelete),
        click: () => {
          ElMessage("删除");
        },
      },
      {
        name: "编辑",
        icon: markRaw(Edit),
        click: () => {
          ElMessage("编辑");
        },
      },
      {
        name: "更多",
        icon: markRaw(MoreFilled),
        click: () => {
          ElMessage("更多");
        },
      },
    ],
  },
  {
    name: "sffdasd",
    isFolder: false,
    updateTime: "2023-01-12",
    id: "adsacaf",
    fileType: "video",
    size: 22,
    icon: markRaw(VideoPlay),
    isVisible: false,
    options: [
      {
        name: "下载",
        icon: markRaw(Download),
        click: () => {
          ElMessage("下载");
        },
      },
      {
        name: "删除",
        icon: markRaw(DocumentDelete),
        click: () => {
          ElMessage("删除");
        },
      },
      {
        name: "编辑",
        icon: markRaw(Edit),
        click: () => {
          ElMessage("编辑");
        },
      },
      {
        name: "更多",
        icon: markRaw(MoreFilled),
        click: () => {
          ElMessage("更多");
        },
      },
    ],
  },
  {
    name: "sgdfhnd",
    isFolder: false,
    updateTime: "2013-01-12",
    id: "bsdfsdfg",
    fileType: "document",
    size: 22,
    icon: markRaw(Document),
    isVisible: false,
    options: [
      {
        name: "下载",
        icon: markRaw(Download),
        click: () => {
          ElMessage("下载");
        },
      },
      {
        name: "删除",
        icon: markRaw(DocumentDelete),
        click: () => {
          ElMessage("删除");
        },
      },
      {
        name: "编辑",
        icon: markRaw(Edit),
        click: () => {
          ElMessage("编辑");
        },
      },
      {
        name: "更多",
        icon: markRaw(MoreFilled),
        click: () => {
          ElMessage("更多");
        },
      },
    ],
  },
  {
    name: "basdf",
    isFolder: false,
    updateTime: "2024-01-12",
    id: "bsddfhdhfdfg",
    fileType: "audio",
    size: 22,
    icon: markRaw(Headset),
    isVisible: false,
    options: [
      {
        name: "下载",
        icon: markRaw(Download),
        click: () => {
          ElMessage("下载");
        },
      },
      {
        name: "删除",
        icon: markRaw(DocumentDelete),
        click: () => {
          ElMessage("删除");
        },
      },
      {
        name: "编辑",
        icon: markRaw(Edit),
        click: () => {
          ElMessage("编辑");
        },
      },
      {
        name: "更多",
        icon: markRaw(MoreFilled),
        click: () => {
          ElMessage("更多");
        },
      },
    ],
  },
]);
