export interface ContentSharingInterface {
    shareList(options: { listId: number }): Promise<{ remoteListId: string }>
    shareListEntries(options: { listId: number }): Promise<void>
    getRemoteListId(options: { localListId: number }): Promise<string | null>
    areListsShared(options: {
        localListIds: number[]
    }): Promise<{ [listId: number]: boolean }>
    waitForListSync(options: { localListId: number }): Promise<void>
}

export type ContentSharingAction =
    | AddSharedListEntriesAction
    | RemoveSharedListEntryAction
    | ChangeSharedListTitleAction
    | ChangeSharedListDescriptionAction
export interface AddSharedListEntriesAction {
    type: 'add-shared-list-entries'
    localListId: number
    remoteListId: string
    data: Array<{
        createdWhen: number | '$now'
        entryTitle: string
        originalUrl: string
        normalizedUrl: string
    }>
}
export interface RemoveSharedListEntryAction {
    type: 'remove-shared-list-entry'
    localListId: number
    remoteListId: string
    normalizedUrl: string
}

export interface ChangeSharedListTitleAction {
    type: 'change-shared-list-title'
    localListId: number
    remoteListId: string
    newTitle: string
}

export interface ChangeSharedListDescriptionAction {
    type: 'change-shared-list-description'
    localListId: number
    remoteListId: string
    newDescription: string
}