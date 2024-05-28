"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle, icons } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

import projectTemplateImage from "../../../../public/projectTemplate.png";
import blankTemplateImage from "../../../../public/blankTemplate.png";
import meetingTemplateImage from "../../../../public/meetingTemplate.png";
import todoTemplateImage from "../../../../public/todoTemplate.png";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const createTemplate = useMutation(api.documents.createTemplate);

  const onCreate = (template: any) => {
    const promise = createTemplate({
      title: template.name,
      icon: template.icon,
      coverImage: template.coverImage,
      content: template.content,
    }).then((documentId) => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  const templates = [
    {
      id: 1,
      name: "Blank",
      preview: blankTemplateImage,
      description: "Start with a blank slate",
      template: "blank",
    },
    {
      id: 2,
      name: "Meeting Notes",
      preview: meetingTemplateImage,
      description: "Template for meeting notes",
      template: "meeting-notes",
      icon:"👩‍👧‍👧",
      coverImage: "https://files.edgestore.dev/hf2hmc8tdx3b18wk/publicFiles/_public/1a7cffa6-337b-49c0-84d0-38a28a05902c.jpeg",
      content:`[
        {
          "id": "c25ddbef-df73-417d-9409-fa5ebd4aa354",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Meeting Title:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Title of the Meeting]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "05754f42-0e58-46d1-8d1b-b8f8980ec16b",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Date:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Date of the Meeting]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "1f7a3e8c-ec32-43aa-b887-2565a4dc3ba9",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Time:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Start Time - End Time]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "4974183b-8eb9-4d8a-8ae1-5ab154b9f265",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Location/Venue:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Physical location or virtual platform]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "a72431b2-2c09-4ec9-9b44-d1263d987b37",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "3b224dc4-275d-45c9-8bb4-24c9d5fce88f",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Attendees:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "22e76946-d90b-4e3f-a197-fe964cd4532a",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[List of attendees, including their names and roles]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "ed07d164-9406-41e0-9a74-819cbad916f3",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "7c9b66f9-c15f-4fee-ad42-fa33eab05d6f",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Agenda:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "6191e559-fb34-4f6a-958c-cda050e9ca4a",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Welcome and Introduction",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "2e5c3351-b1d2-4042-936e-e85e96c20cbf",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Introduction of attendees",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "cb952478-fc22-4eb2-9595-b085ac38a5c1",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Overview of the meeting objectives",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "1e692030-2bda-4540-ab26-ab18ab53092b",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "c2e8b978-c626-4ef9-aeb3-4dff1fcbce26",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Review of Previous Meeting Minutes",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "209b11ba-7126-41c9-886d-3b84222db589",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Discuss action items from the previous meeting",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "47b25dfb-46b5-48b7-bf62-3fbda9b06ce2",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Confirm completion status of action items",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "b788c72d-1d8a-4b75-9ec6-2e691ab1ddc0",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "e04adbe2-590f-4952-850e-3f8c66acfcf0",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Main Discussion Topics",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "038549ce-9e0d-4292-a403-f483d3fa7782",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "[List of discussion topics]",
                  "styles": {}
                }
              ],
              "children": [
                {
                  "id": "a723cb6f-963a-4146-b04a-ff75e3a7901b",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Topic 1",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "ba02427f-3714-402e-8e39-2f60386253dd",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Topic 2",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "eef07fc8-773d-4edb-a9df-5cafdbda7a07",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "...",
                      "styles": {}
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "id": "f1060148-6f66-48c6-b472-1d7252817793",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "ab876785-5291-48db-ad4b-8cc2d9b5eb6a",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Action Items",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "2e3d196a-611b-4752-8c87-f16af34197f7",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Assign tasks to specific individuals",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "ecf68731-c363-4e17-9c4b-df4e66ed6a12",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Set deadlines for action items",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "ef088d6b-648f-4c04-8b03-458394fc45c1",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "ada0fe28-2b69-453f-939d-98bd3c9c1b3c",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Upcoming Deadlines",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "6c6bfa68-b33a-46aa-982f-04e25241d206",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Review upcoming deadlines or important dates related to the project or tasks discussed",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "e404c4f6-69b0-453e-b557-fd00a7bb517b",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "e0727d46-42a3-4509-b557-3f48eb714d8e",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Next Meeting",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "f710bbf6-30b2-4e97-ba92-f972ff8f4d9a",
              "type": "bulletListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Confirm date, time, and agenda items for the next meeting",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "c53a866c-7e5d-469a-9569-035c9b26aef4",
              "type": "paragraph",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [],
              "children": []
            }
          ]
        },
        {
          "id": "f1722009-d8cc-4784-8c79-147a48dd4ae8",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "e3e0110a-59a3-417f-b574-1111460aaf5d",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Additional Notes/Comments:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Space for any additional notes or comments from attendees]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "4db0a851-23f8-478b-82c7-574d4ca4e89d",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "c2afa5ad-b6c5-43fb-a014-1fb5b501bcf3",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Attachments:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "d8ebabfd-ca17-475f-bb5b-18b14ec47152",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[List any attached documents, presentations, or files related to the meeting]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "e74f6063-db62-47ce-8eff-47122782a471",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "3c0b6b82-04fe-4d1a-a254-b15d4098efbf",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Meeting Minutes:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " ",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "508f6c5d-414c-45af-95bf-ab006f21d3ea",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[Space for meeting minutes to be recorded during the meeting]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "9442d612-3cd1-435e-a69c-3d0a554afc6f",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        }
      ]`,
    },
    {
      id: 3,
      name: "Project Plan",
      preview: projectTemplateImage,
      description: "Template for project planning",
      template: "project-plan",
      icon: "📽️",
      coverImage:
        "https://files.edgestore.dev/hf2hmc8tdx3b18wk/publicFiles/_public/5a067481-2f8a-4fb4-af42-ff45ab5a61e6.png",
      content: `[
        {
          "id": "a7aab5b3-a532-4b98-a669-33e213b04bb4",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "afb57307-f96d-443b-98d7-63c85f3bbb13",
          "type": "heading",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left",
            "level": 3
          },
          "content": [
            {
              "type": "text",
              "text": "Project Overview:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Provide a brief description of the project, its objectives, and any relevant background information.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "885cb08a-cbf4-4e58-8405-0ba825442760",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "050c5131-ac4e-4ad3-b132-ee391a6e5ac3",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Meraki Tip: ",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": "Welcome to your project tracker, where you can manage projects and tasks for your entire team! This page contains two connected databases:",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "00320f73-805d-441b-bdbf-e9fde1b8b9ae",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "📽️Projects: ",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": "This is your overview of all the projects in the pipeline",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "de2d21c1-8e87-4652-b5aa-da095aa2356a",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "✐Tasks:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " This is your detailed breakdown of every task under your projects",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "1a6d177f-4539-428a-b442-555a2f2a8e4c",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "7a45eca0-9f21-4d7d-ba7d-863b6a767b2d",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Key Stakeholders:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [List the individuals or groups involved in the project and their roles.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "d0ed8330-98ff-40da-a14c-08883e3349da",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "22d70091-02e5-4f0f-b087-7d2738604e67",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Project Timeline:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Outline the project timeline including start and end dates, as well as key milestones.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "2cb58864-2de0-4ad7-98e6-fdf5dc03c0ab",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "2b2df7ba-94ad-4fa9-b75d-0a92630babc3",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Project Goals:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [List the specific goals and objectives of the project.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "1e81b7e2-eefd-4d5c-bc28-c248768121a2",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "5232598b-6746-4c65-a394-dd4774d69a35",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Tasks:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [List the individual tasks required to complete the project. Include task descriptions, responsible parties, deadlines, and status updates.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "66bb252b-e009-4f0c-b4bf-2cdc8c6ac3b2",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "1ccf1872-3a25-460f-87aa-be63542ecef6",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Task1",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "b83be779-f4b0-4d59-83a6-2e4e1bab3e63",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Description:",
                  "styles": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": " [Description of the task]",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "22ff43ea-bd79-4b05-9317-3b0dcf7d5b9c",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Responsible:",
                  "styles": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": " [Name of the person responsible]",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "1d7c66f8-d145-4134-a449-1c54442d17c7",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Deadline:",
                  "styles": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": " [Deadline for completion]",
                  "styles": {}
                }
              ],
              "children": []
            },
            {
              "id": "acb93284-df69-446a-8703-e03b6b5503c3",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Status:",
                  "styles": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": " [Not started/In progress/Completed]",
                  "styles": {}
                }
              ],
              "children": []
            }
          ]
        },
        {
          "id": "c01147a6-4dc7-4d08-924e-4ce0a683792a",
          "type": "numberedListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Task2",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "90a3a26a-200a-4c89-98e8-a227eb880f50",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Description:",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": []
            },
            {
              "id": "b0a13275-f512-4dc2-8780-51e056987cbe",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Responsible:",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": []
            },
            {
              "id": "803e9936-809e-4c1d-93b7-3242ade5911a",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Deadline:",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": []
            },
            {
              "id": "45f2688e-11b6-4f0c-a562-fcee376c9cda",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "Status:",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": []
            }
          ]
        },
        {
          "id": "c2549e8c-7069-49fa-8afc-fec75712e0a2",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[Continue listing tasks as needed]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "45c6766a-0e65-4a4b-b626-8413a13b809f",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "8f022044-4286-4185-99a6-02b8ebb3745c",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Resources Required:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [List any resources needed to complete the project such as personnel, budget, equipment, etc.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "66eb598a-d9d4-479f-99fb-44b71078d1bd",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "803b9817-3174-4d56-bdd8-3d6b27778394",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Risks and Challenges:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Identify potential risks and challenges that may arise during the project and how they will be mitigated.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "5b8414b6-69ca-454c-b393-d05f55854d93",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "4e96db1f-d57b-45fa-baee-29b0a665f4f8",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Progress Tracking:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Outline how progress will be tracked and reported throughout the project duration.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "aa0c005e-72f1-4831-9522-924fa8f61fd6",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "df2ad1c9-df96-41fc-8019-83e29b2e527e",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Communication Plan:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Detail the communication plan including frequency of updates, preferred communication channels, and key contacts.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "056f79e1-8b1e-4ede-94ea-00d6b96f6a92",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "6cc8cf22-1619-4c30-8b50-63ce13f99edf",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Approval Signatures:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Provide space for relevant stakeholders to sign off on the project plan.]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "bfb3366c-622f-4074-8279-438a3fc8806d",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        }
      ]`,
    },
    {
      id: 4,
      name: "To-Do List",
      preview: todoTemplateImage,
      description: "Template for to-do lists",
      template: "to-do-list",
      icon:"🖇️",
      coverImage:"https://files.edgestore.dev/hf2hmc8tdx3b18wk/publicFiles/_public/3ec4bee8-decf-40b0-a85e-842b3877035b.jpeg",
      content:`[
        {
          "id": "b64e211f-dc57-4543-b40b-192164327a1a",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Date:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Date]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "e3de127b-f7d7-4123-9090-c0b45adce3d0",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "9da8df09-6d3f-4a0a-9a57-94a680b97513",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Priority Levels:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "a3f4b217-8e06-4387-a14d-bf38700b1832",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "High: Tasks that require immediate attention",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "4fcb13b0-69c7-425c-a9e6-b39b63a4b2f0",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Medium: Tasks that are important but not urgent",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "c7c3496f-ef55-4ee8-b2b1-4f1a8fc34365",
          "type": "bulletListItem",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Low: Tasks that can be completed later",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "a885b776-a6c9-4cfd-b6b9-c7201addd296",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "f3ca34e7-7de3-4027-8142-477637f55e91",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Tasks:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": [
            {
              "id": "a3d39bf0-73db-472c-8666-2b74d8d20811",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "[Task 1]",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": [
                {
                  "id": "ce81d57c-45b2-4cd6-8203-13797e8af3fe",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Priority:",
                      "styles": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " [High/Medium/Low]",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "4fa1c0a7-cc49-4bbd-af8e-9be502e9f0e8",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Description:",
                      "styles": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " [Description of the task]",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "2e39fbea-72fe-4d61-9c4b-8e63a373aa59",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Deadline:",
                      "styles": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " [Deadline for completion]",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "9a9119be-aaca-4fbe-ac17-08e205d995a7",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Progress:",
                      "styles": {
                        "bold": true,
                        "strike": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " [Percentage or status update]",
                      "styles": {
                        "strike": true
                      }
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "id": "da2de65f-e4bc-4d60-a1ca-d8bfae13a53d",
              "type": "numberedListItem",
              "props": {
                "textColor": "default",
                "backgroundColor": "default",
                "textAlignment": "left"
              },
              "content": [
                {
                  "type": "text",
                  "text": "[Task 2]",
                  "styles": {
                    "bold": true
                  }
                }
              ],
              "children": [
                {
                  "id": "622832d7-e0dd-424d-8040-2f328b556cdd",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Priority:",
                      "styles": {
                        "bold": true
                      }
                    },
                    {
                      "type": "text",
                      "text": " [High/Medium/Low]",
                      "styles": {}
                    }
                  ],
                  "children": []
                },
                {
                  "id": "33472335-41da-4c11-8a8e-029972c1ccd1",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Description:",
                      "styles": {
                        "bold": true
                      }
                    }
                  ],
                  "children": []
                },
                {
                  "id": "758e2f7f-bad9-4122-8f2f-c4b47ee7dec9",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Deadline:",
                      "styles": {
                        "bold": true
                      }
                    }
                  ],
                  "children": []
                },
                {
                  "id": "662243bf-8531-4fba-b762-3ce6bfc77f08",
                  "type": "bulletListItem",
                  "props": {
                    "textColor": "default",
                    "backgroundColor": "default",
                    "textAlignment": "left"
                  },
                  "content": [
                    {
                      "type": "text",
                      "text": "Progress:",
                      "styles": {
                        "bold": true
                      }
                    }
                  ],
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": "7ddc6633-1d2e-421f-962c-7fb5758595a4",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[Continue listing tasks as needed]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "7541dcec-fa38-4ce5-b591-3d78e943df36",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "9259166f-4cc3-400a-8bc2-b1d608a1a9a6",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Completed Tasks:",
              "styles": {
                "bold": true
              }
            }
          ],
          "children": []
        },
        {
          "id": "1ba3145a-3bc2-489a-b698-c96a3f04a608",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "[List of completed tasks]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "c55a5e8b-0f23-440e-84c6-fa6384b4295b",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        },
        {
          "id": "1c311963-07e3-4638-a62d-5ec9bea98256",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [
            {
              "type": "text",
              "text": "Notes:",
              "styles": {
                "bold": true
              }
            },
            {
              "type": "text",
              "text": " [Space for any additional notes or comments related to the tasks]",
              "styles": {}
            }
          ],
          "children": []
        },
        {
          "id": "486043b0-31e2-4190-a014-63b143fb2fbd",
          "type": "paragraph",
          "props": {
            "textColor": "default",
            "backgroundColor": "default",
            "textAlignment": "left"
          },
          "content": [],
          "children": []
        }
      ]`
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.id} className="border p-4 rounded-lg shadow-sm">
            <div className="relative h-40 mb-2">
              <Image
                src={template.preview}
                layout="fill"
                objectFit="cover"
                alt={template.name}
              />
            </div>
            <h3 className="text-md font-semibold">{template.name}</h3>
            <p className="text-sm text-gray-500">{template.description}</p>
            <Button onClick={() => onCreate(template)} className="mt-2">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create {template.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
