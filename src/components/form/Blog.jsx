import React, { useState } from "react";
import '../../css/blog.css';

function Blog() {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [organization, setOrganization] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ status, title, content, organization });
        setStatus("");
        setTitle("");
        setContent("");
        setOrganization("");
    };
    return (
        <div className="blog-container">
            <h2 className="blog-header">Create Blog Post</h2>
            <form className="blog-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option value="PUBLISHED">Published</option>
                        <option value="UNPUBLISHED">Unpublished</option>
                        <option value="ARCHIVED">Archived</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter blog title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Enter blog content"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Organization:</label>
                    <select value={organization} onChange={(e) => setOrganization(e.target.value)} required>
                        <option value="">Select Organization</option>
                        <option value="TESLA">Tesla</option>
                        <option value="SPACEX">SpaceX</option>
                        <option value="NEURALINK">Neuralink</option>
                    </select>
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Blog;
