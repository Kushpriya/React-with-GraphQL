import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BLOGS, ADD_BLOG } from '../graphql/Queries';
import '../css/getblogs.css';
import { useParams } from "react-router-dom";

function GetBlogs(organizationId) {
    // const { organizationId } = useParams();
    const { loading, error, data } = useQuery(GET_BLOGS, {
        variables: { organizationId: 2 },
    });

    const [blogs, setBlogs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newBlog, setNewBlog] = useState({ title: "", content: "", status: "PUBLISHED" });

    const [addBlog] = useMutation(ADD_BLOG, {
        onCompleted: (data) => {
            setBlogs([...blogs, data.createBlog.blog]);
        }
    });

    useEffect(() => {
        if (data) {
            setBlogs(data.blogs);
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog({
            variables: {
                blogInfo: {
                    title: newBlog.title,
                    content: newBlog.content,
                    status: newBlog.status,
                    organizationId: Number(organizationId) || 2,
                    userId: 1,  // Assuming userId is 1 for simplicity
                }
            },
        });
        setNewBlog({ title: "", content: "", status: "PUBLISHED" });
        setShowForm(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="blog-container">
            <h2>Blog Posts</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Cancel" : "Add Blog"}
            </button>
            
            {showForm && (
                <form onSubmit={handleSubmit} className="blog-form">
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={newBlog.title}
                            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Content:</label>
                        <textarea
                            value={newBlog.content}
                            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Status:</label>
                        <select
                            value={newBlog.status}
                            onChange={(e) => setNewBlog({ ...newBlog, status: e.target.value })}
                        >
                            <option value="PUBLISHED">Published</option>
                            <option value="UNPUBLISHED">Unpublished</option>
                            <option value="ARCHIVED">Archived</option>
                        </select>
                    </div>
                    <button type="submit">Submit Blog</button>
                </form>
            )}

            {blogs.map((blog) => (
                <div className="blog-item" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Status: {blog.status}</p>
                    <p className="organization-id">Organization ID: {blog.organizationId}</p>
                    <p className="user-id">User ID: {blog.userId}</p>
                    <p>{blog.content}</p>
                    <p className="date">Created at: {blog.createdAt}</p>
                    <p>Last Updated: {blog.updatedAt}</p>
                </div>
            ))}
        </div>
    );
}

export default GetBlogs;
