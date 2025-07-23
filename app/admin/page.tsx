"use client"

import type React from "react"

import { useState } from "react"
import { FiPlus, FiEdit, FiTrash2, FiEye, FiBarChart2, FiUsers, FiDollarSign } from "react-icons/fi"

interface Post {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  video?: string
  goalAmount: number
  raisedAmount: number
  isCompleted: boolean
  type: "campaign" | "result" | "portfolio" | "number" | "testimonial"
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Emergency Winter Relief for Displaced Families",
      category: "Emergency Aid",
      description: "Providing warm clothing, heating, and shelter for 200 families displaced by recent floods.",
      fullDescription: "The recent floods in Sirdaryo region have displaced over 200 families...",
      image: "/placeholder.svg?height=200&width=300",
      goalAmount: 25000,
      raisedAmount: 18500,
      isCompleted: false,
      type: "campaign",
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    fullDescription: "",
    image: "",
    video: "",
    goalAmount: 0,
    type: "campaign" as Post["type"],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingPost) {
      setPosts(
        posts.map((post) =>
          post.id === editingPost.id
            ? { ...post, ...formData, raisedAmount: post.raisedAmount, isCompleted: post.isCompleted }
            : post,
        ),
      )
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        ...formData,
        raisedAmount: 0,
        isCompleted: false,
      }
      setPosts([...posts, newPost])
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      description: "",
      fullDescription: "",
      image: "",
      video: "",
      goalAmount: 0,
      type: "campaign",
    })
    setShowForm(false)
    setEditingPost(null)
  }

  const handleEdit = (post: Post) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      category: post.category,
      description: post.description,
      fullDescription: post.fullDescription,
      image: post.image,
      video: post.video || "",
      goalAmount: post.goalAmount,
      type: post.type,
    })
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter((post) => post.id !== id))
    }
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  const totalRaised = posts.reduce((sum, post) => sum + post.raisedAmount, 0)
  const totalGoal = posts.reduce((sum, post) => sum + post.goalAmount, 0)
  const completedCampaigns = posts.filter((post) => post.isCompleted).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
            >
              <FiPlus className="mr-2 w-5 h-5" />
              Add New Post
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiBarChart2 className="w-8 h-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiDollarSign className="w-8 h-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Raised</p>
                <p className="text-2xl font-bold text-gray-900">${totalRaised.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiUsers className="w-8 h-8 text-purple-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Goal Amount</p>
                <p className="text-2xl font-bold text-gray-900">${totalGoal.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <FiEye className="w-8 h-8 text-yellow-500" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{completedCampaigns}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">All Posts</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {post.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.type === "campaign" ? (
                        <div className="w-full">
                          <div className="flex justify-between text-sm mb-1">
                            <span>${post.raisedAmount.toLocaleString()}</span>
                            <span>${post.goalAmount.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${post.isCompleted ? "bg-green-500" : "bg-yellow-500"}`}
                              style={{ width: `${getProgressPercentage(post.raisedAmount, post.goalAmount)}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.isCompleted ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.isCompleted ? "Completed" : "Active"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(post)} className="text-blue-600 hover:text-blue-900">
                          <FiEdit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-900">
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{editingPost ? "Edit Post" : "Add New Post"}</h2>
                <button onClick={resetForm} className="text-gray-400 hover:text-gray-600 text-2xl">
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Post Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Post["type"] })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  >
                    <option value="campaign">Campaign</option>
                    <option value="result">Result</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="number">Number/Proof</option>
                    <option value="testimonial">Testimonial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Description</label>
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video URL (Optional)</label>
                  <input
                    type="url"
                    value={formData.video}
                    onChange={(e) => setFormData({ ...formData, video: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                  />
                </div>

                {formData.type === "campaign" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Goal Amount (USD)</label>
                    <input
                      type="number"
                      value={formData.goalAmount}
                      onChange={(e) => setFormData({ ...formData, goalAmount: Number.parseInt(e.target.value) || 0 })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>
                )}

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    {editingPost ? "Update Post" : "Create Post"}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
