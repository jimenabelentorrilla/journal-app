import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView , NothingSelectedView} from "../views";
import { AddOutlined } from "@mui/icons-material";


export const JournalPage = () => {
  return (
    <JournalLayout>
      
      {/*<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facilis ipsa fugiat laudantium nihil fugit quas quis corrupti neque pariatur quidem corporis omnis eaque molestiae id, voluptatibus sequi? Iure, distinctio!</Typography>*/}
    
      <NothingSelectedView />
      {/*<NoteView />*/}
    
      <IconButton
        size="large"
        sx={{
          color:"white",
          backgroundColor:"error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9},
          position:"fixed",
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>    
  )
}
