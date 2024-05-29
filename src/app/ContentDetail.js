import React from "react";
import "./ContentDetail.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
function ContentDetail({
  title,
  startYear,
  cover_pic,
  endYear,
  list_type,
  contentDetClass,
  proj_title,
  description,
  bodyClass,
  list_title,
}) {
  return (
    <section
      className={contentDetClass ? "content_detail_proj" : "content_detail"}
    >
      {startYear && (
        <div className="content_detail_tenure">
          <p>
            {startYear} - {endYear}
          </p>
        </div>
      )}
      {bodyClass && (
        <div className={bodyClass}>
          {title && <h4>{title}</h4>}
          {list_title && <li>{list_title}</li>}
          {/* <h4>{proj_title}</h4> */}
          {description && <p>{description}</p>}
        </div>
      )}
      {!bodyClass && (
        <div className="content_detail_body">
          {title && <h4>{title}</h4>}
          {list_title && <li>{list_title}</li>}

          {list_type && <h3>{list_type}</h3>}
          {description && (
            <p>
              {description}
              {list_type === "Hackathon 2k23" ? (
                <EmojiEventsIcon className="royalBlue" />
              ) : (
                ""
              )}
            </p>
          )}
        </div>
      )}

      {cover_pic && (
        <div className="content_pic">
          {/* <img src={cover_pic} alt="Profile_Pic" width="310px" height="180px" /> */}
        </div>
      )}
    </section>
  );
}

export default ContentDetail;
