import { ImageGallery } from "../components";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis ipsa fugiat laudantium nihil fugit quas quis corrupti neque pariatur quidem corporis omnis eaque molestiae id, voluptatibus sequi? Iure, distinctio!</Typography>*/}
    
      {/*<NothingSelectedView />*/}
      <NoteView />
    
    </JournalLayout>

    <ImageGallery />>
  )
}
