import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { v4 as uuidv4 } from 'uuid'
import { DropResult } from 'react-beautiful-dnd'
export interface ColumnsProps {
  [x: string]: {
    name: string
    calories: number
    items: {
      id: string
      content: string
    }[]
  }
}
interface AppState {
  showModal: boolean
  columns: ColumnsProps
}
const url =
  'https://www.michaelbuble.com/sites/g/files/g2000002856/f/styles/media_gallery_large/public/Sample-image10-highres.jpg?itok=o__r64CL'

const list1 = [
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
]
const list2 = [
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
]
const list3 = [{ id: uuidv4(), content: url }]
const list4 = [
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
]
const list5 = [
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
  { id: uuidv4(), content: url },
]

const containersData = {
  [uuidv4()]: {
    name: 'Breakfast',
    calories: 927,
    items: list1,
  },
  [uuidv4()]: {
    name: 'Morning Snack',
    calories: 609,
    items: list2,
  },
  [uuidv4()]: {
    name: 'Lunch',
    calories: 928,
    items: list3,
  },
  [uuidv4()]: {
    name: 'Afternoon Snack',
    calories: 602,
    items: list4,
  },
  [uuidv4()]: {
    name: 'Dinner',
    calories: 962,
    items: list5,
  },
}

const initialState: AppState = {
  showModal: false,
  columns: containersData,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onDragEnd: (
      state,
      action: PayloadAction<{
        result: DropResult
        columns: ColumnsProps
      }>
    ) => {
      const result = action.payload.result
      const columns = action.payload.columns
      if (!result.destination) return
      const { source, destination } = result

      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId]
        const destColumn = columns[destination.droppableId]
        const sourceItems = [...sourceColumn.items]
        const destItems = [...destColumn.items]

        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)
        state.columns = {
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        }
      } else {
        const column = columns[source.droppableId]

        const copiedItems = [...column.items]

        const [removed] = copiedItems.splice(source.index, 1)

        copiedItems.splice(destination.index, 0, removed)

        state.columns = {
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        }
      }

      return state
    },
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    },
  },
})

export const { showModal, hideModal, onDragEnd } = appSlice.actions
export const selectColumns = (state: RootState) => state.app.columns
export const selectShowModal = (state: RootState) => state.app.showModal
export default appSlice.reducer
